## Krovva MVP Project
This repository contains the MVP for Krovva.
## Overview

The project is a NextJS-based template, developed as a Worldcoin mini-app to be deployed into the WorldApp ecosystem.

## Branching Strategy
```dev```: The development branch where all new features and updates are implemented.

```main```: The production branch, strictly for stable releases.

## Setup Contribution Instructions
```bash
Fork the project
```

### Clone project 
```bash
git clone https://github.com/YOUR_USERNAME/krovva-mvp.git
cd krovva-mvp
```

### Add the original repository as 'upstream'
```bash
git remote add upstream https://github.com/Krovva/krovva-mvp.git
```

### Verify your remotes
```bash
git remote -v
```

### Fetch all branches from both origin and upstream
```bash
git fetch --all
```

### Set up your local branches:
```bash
git checkout main
git checkout -b dev upstream/dev
git checkout -b feature/your-feature-name dev
```


## Installation Setup
Navigate to the project directory and install all necessary dependencies using:
```bash
pnpm install
```

To run the project: 
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Docs
[Worldcoin Docs](https://docs.world.org/)

[Worldcoin Developer Portal](https://developer.worldcoin.org/)