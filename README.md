# PoetMap

### Overview
This project is aimed at creating the interactive website(html/react/vue/css/3D) 
#topic
under the topic of the track of poet who spent different time at different place and ultimately formed their own poem style.
$model
the main goal is to establish the relationship bewteen the movement of poets and the content of the art creation

# Description Document
### Overview
Map is a way of scientific expression with a very long history. From ancient times to modern times, the integration of map and science and technology is gradual and significant. Out of love for Chinese culture, we made 3D maps of ancient places where people walked to vividly show the footprints of poets, and investigated the lives of poets, enriching the display content
### Project Technology Stack
- Front End：Vue3 + uni-app
- Backstage：SpringBoot
- Database：Mysql
- 3D visulized mao：Cesium
- Construction Tool：vite
### Project File Tree
```
PoetMap
├─ .babelrc
├─ .gitignore
├─ index.html
├─ jsconfig.json
├─ package.json
├─ pnpm-lock.yaml
├─ README.md
├─ src
│  ├─ api
│  │  └─ user.js
│  ├─ App.vue
│  ├─ components
│  │  ├─ cesiumMap.vue
│  │  ├─ poetLife.vue
│  │  ├─ poetLocation.vue
│  │  ├─ searchPoet.vue
│  │  ├─ topBar.vue
│  │  └─ VueTimeline.vue
│  ├─ config
│  │  └─ index.js
│  ├─ graph
│  │  ├─ axis.js
│  │  ├─ cursor.js
│  │  ├─ events.js
│  │  ├─ layout.js
│  │  ├─ timeline.js
│  │  └─ zoom.js
│  ├─ main.js
│  ├─ manifest.json
│  ├─ pages
│  │  └─ index.vue
│  ├─ pages.json
│  ├─ static
│  │  ├─ logo.png
│  │  ├─ models
│  │  │  └─ model.gltf
│  │  └─ topbar.png
│  ├─ stores
│  │  ├─ index.js
│  │  └─ modules
│  │     └─ user.js
│  ├─ uni.scss
│  ├─ ut
│  └─ utils
│     ├─ mapUtils.js
│     └─ request.js
└─ vite.config.js

```
### Project Start-up Description
- npm start-up
1. install relative dependence
```bash
npm install
```
2. operate under web page 
```bash
npm run dev:h5
```

- yarn start-up 
```bash
yarn run dev:h5
```

- pnpm start-up 
```bash
pnpm dev:h5
```
### Project Experience Address
### Environment Preparation
- NodeJS: v16.17.1
- pnpm: v7.12.2

### Project Test Coverage Rate

- Single Test Coverage
- Function Test Coverage

### Code Standarization

- **ESlint**

### Project Member

| Project Member | Role | Responsibility |
| :------: | :--: | :--:|
| Zhong Li     | Leader | Front end map page construction and division of labor |
| Yuanyuan Wang | Project Manager | Overall project control, data collection, front-end page construction |
| Bohui Li | Developer | Server development and data processing |
| Yu Liu | Developer | Front end framework and query interface construction |
| Xingbao Yan | Project Manager&UI Design | Product research, data collection, front-end page construction, UI design |
| 杜汶珂 | UI Design | UI Design、Data Collection |
