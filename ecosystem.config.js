module.exports = {

  apps: [{
    name: 'nuxt-hi',
    script: './node_modules/nuxt-start/bin/nuxt-start.js',
    instances: 'max', // 負載平衡模式下的 cpu 數量
    exec_mode: 'cluster', // cpu 負載平衡模式
    max_memory_restart: '1G', // 緩存了多少記憶體重新整理
    port: 3001 // 指定伺服器上的 port
  }]

  /* 下列為初始化產生的內容 */
  // apps: [{
  //   script: 'index.js',
  //   watch: '.'
  // }, {
  //   script: './service-worker/',
  //   watch: ['./service-worker']
  // }],

  // deploy: {
  //   production: {
  //     user: 'SSH_USERNAME',
  //     host: 'SSH_HOSTMACHINE',
  //     ref: 'origin/master',
  //     repo: 'GIT_REPOSITORY',
  //     path: 'DESTINATION_PATH',
  //     'pre-deploy-local': '',
  //     'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
  //     'pre-setup': ''
  //   }
  // }
}
