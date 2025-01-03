"use client";
import { MiniKit, ResponseEvent, WalletAuthInput, MiniAppWalletAuthPayload,
  MiniAppWalletAuthSuccessPayload  } from '@worldcoin/minikit-js';
import React from 'react';
import { useEffect, useState } from 'react';

interface WalletAuthProps {
  onSuccess?: (address: string) => void;
  onError?: (error: any) => void;
  buttonComponent?: React.ReactNode;
}

export const WalletAuthBlock = ({ onSuccess, onError, buttonComponent }: WalletAuthProps) => {
  const [nonce, setNonce] = useState<string | null>(null);

  const signInWithWallet = async () => {
    try {
      console.log('🚀 Starting World ID auth...'); 
      
      if (!MiniKit.isInstalled()) {
        const error = new Error('MiniKit is not installed');
        console.error('❌', error);
        onError?.(error);
        return;
      }

      console.log('✅ MiniKit is installed');
      console.log('📡 Requesting nonce...');

      const res = await fetch(`/api/auth/nonce`);
      const { nonce } = await res.json();
      console.log('✅ Nonce received:', nonce);
      setNonce(nonce);

      const authParams: WalletAuthInput = {
        nonce: nonce,
        requestId: "0",
        expirationTime: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
        notBefore: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
        statement: "Connect your wallet in Krovva",
      };

      console.log('🔐 Sending walletAuth command with params:', authParams);
      MiniKit.commands.walletAuth(authParams);
    } catch (error) {
      console.error('❌ Error:', error);
      onError?.(error);
    }
  };

  useEffect(() => {
    if (!MiniKit.isInstalled()) return;

    console.log('🎧 Configuring MiniKit listener...');

    MiniKit.subscribe(
      ResponseEvent.MiniAppWalletAuth,
      async (payload: MiniAppWalletAuthPayload) => {
      console.log('📨 Response received from World App:', payload);
      
      if (payload.status === "error") {
        console.error('❌ Error in wallet auth:', payload);
        onError?.(payload);
        return;
      }

      try {
        console.log('🔍 Checking in backend...');
        const response = await fetch("/api/auth/complete-siwe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            payload: payload as MiniAppWalletAuthSuccessPayload, 
            nonce 
          }),
        });

        const result = await response.json();
        console.log('📬 Verification result:', result);

        if (result.status === "success" && result.isValid) {
          console.log('✅ Authentication successful! Wallet:', MiniKit.walletAddress);
          onSuccess?.(MiniKit.walletAddress || '');
          setNonce(null);
        } else {
          throw new Error('Failed verification');
        }
      } catch (error) {
        console.error('❌ Failed verification', error);
        onError?.(error);
      }
    }
  );

  return () => {
    console.log('🧹 Cleaning MiniKit subscription');
    MiniKit.unsubscribe(ResponseEvent.MiniAppWalletAuth);
  }
}, [nonce, onSuccess, onError]);

  if (buttonComponent) {
    return React.cloneElement(buttonComponent as React.ReactElement, {
      onClick: signInWithWallet
    });
  }

  return null;
};