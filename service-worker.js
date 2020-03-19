/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c7ffd94c883039671fcf01d4b8314e92"
  },
  {
    "url": "assets/css/0.styles.69760bb8.css",
    "revision": "f3fcf2aec1a7ea9093d62ea34053f8ba"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6a788c12.js",
    "revision": "f10ed079ee601705509807e3d72c35da"
  },
  {
    "url": "assets/js/11.fa5e3344.js",
    "revision": "17e79e8fae83560807beafdbb91e00e7"
  },
  {
    "url": "assets/js/12.eabeb8a0.js",
    "revision": "4122eb32fbfcb9f77dbf21f3e1beb562"
  },
  {
    "url": "assets/js/13.6e9f6e22.js",
    "revision": "f851952fea90e05589ebca1dffb7fbd0"
  },
  {
    "url": "assets/js/14.d254745e.js",
    "revision": "b0e36832441d0f37e4a09b896985f0d4"
  },
  {
    "url": "assets/js/15.380cc16d.js",
    "revision": "299b25cd4facc14d59d6ae8b5428f368"
  },
  {
    "url": "assets/js/16.0898b18c.js",
    "revision": "a5dc0bd6c11fb4d3bac29b45eff04cd4"
  },
  {
    "url": "assets/js/17.7abca04f.js",
    "revision": "d554a22de68d145c7249cdb7fb69025f"
  },
  {
    "url": "assets/js/18.d40fb34f.js",
    "revision": "39adcbb3f7b6cb81f324cce4a154744f"
  },
  {
    "url": "assets/js/19.6fa2038c.js",
    "revision": "e1f944e1440df400b0f7a7be020171de"
  },
  {
    "url": "assets/js/20.0dc1465c.js",
    "revision": "29d5bb5d73d24284ff8bb1762e1d13e7"
  },
  {
    "url": "assets/js/21.6c3dc622.js",
    "revision": "3077bcc2ee17cd78da1d9aff42279e9c"
  },
  {
    "url": "assets/js/22.f85fa17e.js",
    "revision": "8ffd5aea8c1d27e4ca6c6ea24d138f28"
  },
  {
    "url": "assets/js/23.574520e7.js",
    "revision": "40f1b0cc3ae9c3aa6e2c98239f9e61d6"
  },
  {
    "url": "assets/js/24.3799201a.js",
    "revision": "03fbc60661fa4fe95dd8b8fe998788a0"
  },
  {
    "url": "assets/js/25.34f67389.js",
    "revision": "b3ac17ea0d135ea32b110558898fbf74"
  },
  {
    "url": "assets/js/26.ebb64201.js",
    "revision": "1bd455acaf0c84ba8bf6a0aa1c5675b0"
  },
  {
    "url": "assets/js/27.7e9b9d8f.js",
    "revision": "2d3c1e5b157a0e20228fa83739db042c"
  },
  {
    "url": "assets/js/28.b1ed27ee.js",
    "revision": "1573e8fa14f71666d89fdb3e9fc47072"
  },
  {
    "url": "assets/js/29.1fe1186c.js",
    "revision": "9f69c840d8e5a01f1ad4c8687ff79278"
  },
  {
    "url": "assets/js/30.4f8930f9.js",
    "revision": "36611e6242156995a42ab43bbdd3096b"
  },
  {
    "url": "assets/js/31.d76d9926.js",
    "revision": "a52945789b8aedea228efc8ab33dd3c7"
  },
  {
    "url": "assets/js/32.47aee94e.js",
    "revision": "52909ab9aa3bb7ce9a1f357bc32b0286"
  },
  {
    "url": "assets/js/33.955cb333.js",
    "revision": "9ae854d2a97bc0e16238bbd0c72ad3e6"
  },
  {
    "url": "assets/js/34.8c6e995b.js",
    "revision": "274e0d92dd4d90c8336687fd9a5f20bd"
  },
  {
    "url": "assets/js/35.71122a89.js",
    "revision": "c1be745cf9d74aabfee5315a24cbdbc4"
  },
  {
    "url": "assets/js/36.e6ba870c.js",
    "revision": "f28bdea71200a77f334e6e11a0664764"
  },
  {
    "url": "assets/js/37.2c328754.js",
    "revision": "d652b927d84874d9ea4c4cf7c123abac"
  },
  {
    "url": "assets/js/38.6c500914.js",
    "revision": "723ede9958cdd27701ad4df860694fed"
  },
  {
    "url": "assets/js/39.bb5dede2.js",
    "revision": "e19e48a04e9d87d7de34506dadfba565"
  },
  {
    "url": "assets/js/4.80270faa.js",
    "revision": "efccbf070a56bf82e317058075c66d48"
  },
  {
    "url": "assets/js/40.1b5dd361.js",
    "revision": "9e5244a0e7560ddfb4674abda6274a31"
  },
  {
    "url": "assets/js/41.e908419b.js",
    "revision": "7ca6be6938100a938a215ddef6ac1039"
  },
  {
    "url": "assets/js/42.68ec1ded.js",
    "revision": "25854c9b35e3cd8f072b4f30fcdbad4e"
  },
  {
    "url": "assets/js/43.36a2d350.js",
    "revision": "385e091844eaa7547a67427037e3de71"
  },
  {
    "url": "assets/js/44.a88c7c2b.js",
    "revision": "5086b6faa8f36d818d3e70e944ed6862"
  },
  {
    "url": "assets/js/45.5eef8084.js",
    "revision": "35fa2a9bbe64b93e0196d9a41d7c0c92"
  },
  {
    "url": "assets/js/46.84c24312.js",
    "revision": "fa0bc5cb82c2cc43b7b4a8297bccb08e"
  },
  {
    "url": "assets/js/47.0964a0f6.js",
    "revision": "b5b7574cbd16ece732aed044416af534"
  },
  {
    "url": "assets/js/48.02b69d10.js",
    "revision": "82370434e51200e503ff96eec5d301f9"
  },
  {
    "url": "assets/js/5.7f8a8258.js",
    "revision": "4b80cba4e7bddfd48f542c2250ececf6"
  },
  {
    "url": "assets/js/6.ab157167.js",
    "revision": "5c1b4dd2cc388ca1d5b273d7ba801910"
  },
  {
    "url": "assets/js/7.4bfbdb0f.js",
    "revision": "69b65fa1b4099311a6237fa45f551613"
  },
  {
    "url": "assets/js/8.eead1267.js",
    "revision": "9a5a4758474de231694d19546325a17c"
  },
  {
    "url": "assets/js/9.92883f8c.js",
    "revision": "3d59cfd32a7764aa925d3b1c555454fa"
  },
  {
    "url": "assets/js/app.58d761a1.js",
    "revision": "74d1573e4b664be9822bd548d13105f9"
  },
  {
    "url": "assets/js/vendors~flowchart.a4a5478f.js",
    "revision": "402c4894927cf4630017666db5ee9087"
  },
  {
    "url": "assets/js/vendors~notification.7414fc30.js",
    "revision": "4b2fa06e946087714f251475ce5cc89e"
  },
  {
    "url": "deploy/databaseSql.png",
    "revision": "8dd22cc666e16cbd88ae4ca0927869a1"
  },
  {
    "url": "deploy/doc.png",
    "revision": "9307863f61d8777056cefc1f4b92593b"
  },
  {
    "url": "deploy/linux-tomcat-start.png",
    "revision": "fbf21d8fcb2d7c829812508cd176ff84"
  },
  {
    "url": "deploy/linux-tomcat-stop.png",
    "revision": "3beb710e73c795f04f410b344d57d6da"
  },
  {
    "url": "deploy/local1.png",
    "revision": "2747f21a20f58b85ba39a4ecba2e280a"
  },
  {
    "url": "deploy/local2.png",
    "revision": "4677c8d44aea329da0a5a7f7032ab99d"
  },
  {
    "url": "deploy/windows-tomcat-start.png",
    "revision": "6f769b09dfda3c3e690c49c3aca19189"
  },
  {
    "url": "develop/addTask.png",
    "revision": "5862f70e64f55dc6b9873234ed692f7a"
  },
  {
    "url": "develop/deleteRequest.png",
    "revision": "d2ee7e0be6bf83e035ec55fb16227321"
  },
  {
    "url": "develop/functions.png",
    "revision": "dc672bd7819ec5c5e6394e4429472642"
  },
  {
    "url": "develop/getRequest.png",
    "revision": "83662ff397e847484b4f8e809184f927"
  },
  {
    "url": "develop/postRequest.png",
    "revision": "02369129037a9ac0f8a6aa1762815466"
  },
  {
    "url": "develop/processDesign.png",
    "revision": "c3431953636a487092b327301cfa6604"
  },
  {
    "url": "develop/putRequest.png",
    "revision": "1206fef8bd8cf28d9a0df8743ed27639"
  },
  {
    "url": "develop/requestParameter.png",
    "revision": "a80bf137e6c5ae3dbd677cc618d5ed94"
  },
  {
    "url": "develop/rightsManagement.png",
    "revision": "19d4d3dea6057b6d37b99812931356bb"
  },
  {
    "url": "develop/scheduleExecution1.png",
    "revision": "50ad4eefdf20b72ac1e36bda8d25f211"
  },
  {
    "url": "develop/scheduleExecution2.png",
    "revision": "98a2eacac81c6bf61c29b4bb333eb9b4"
  },
  {
    "url": "develop/taskConfig.png",
    "revision": "16d28c9334e50f28ad22f0597f9856a1"
  },
  {
    "url": "develop/taskScheduling.png",
    "revision": "c3e39ebedd120af3e8e1e82d99b960bd"
  },
  {
    "url": "develop/timedRequest.png",
    "revision": "429573f182ef20a8c6aed819da38f48b"
  },
  {
    "url": "develop/timedRequestLog.png",
    "revision": "f4fa23ab48cc92ad667dda7d857c871f"
  },
  {
    "url": "develop/timedTask.png",
    "revision": "aff61a96fb58c81fdc1489a96b55dc09"
  },
  {
    "url": "development/index.html",
    "revision": "01559ba97b341a5d458db6cc2a7683b1"
  },
  {
    "url": "faq/index.html",
    "revision": "59dec2229862c00862e645011f708dc1"
  },
  {
    "url": "guide/deploy.html",
    "revision": "71b466dea764eade66e9c84a25e532ff"
  },
  {
    "url": "guide/index.html",
    "revision": "dc8987959dcf7ff4f5640099fad8c756"
  },
  {
    "url": "guide/prepare.html",
    "revision": "a5605f083d26833bcf40e1e7a9cfdb97"
  },
  {
    "url": "guide/redis-sentry.html",
    "revision": "7460d7119ca406249840f7aeee0dadec"
  },
  {
    "url": "guide/run.html",
    "revision": "4a7269840aac4f8a6b7617acd6775d13"
  },
  {
    "url": "guide/userManual/01-introduction.html",
    "revision": "1d7969f9f7160a62a96388839fdc5a75"
  },
  {
    "url": "guide/userManual/02-login.html",
    "revision": "a69605962b5fc6cc84eaf25c06c08512"
  },
  {
    "url": "guide/userManual/03-organization.html",
    "revision": "630b865e15cbb1d9f11a54bfa4e433d0"
  },
  {
    "url": "guide/userManual/04-authority.html",
    "revision": "9250fa13561a9a2041e9281118f01da6"
  },
  {
    "url": "guide/userManual/05-system-settings.html",
    "revision": "d359a172ccceeac2b8e12829a349c27d"
  },
  {
    "url": "guide/userManual/06-application-settings.html",
    "revision": "b77c0560203a7032dc51dfc5b4342426"
  },
  {
    "url": "guide/userManual/07-my-task.html",
    "revision": "b8d402dac7988f8ad143291d75d31a08"
  },
  {
    "url": "guide/userManual/08-workflow.html",
    "revision": "cb6e413025d89b399b2141bdbb11bf96"
  },
  {
    "url": "guide/userManual/09-timed-task.html",
    "revision": "7d99978d594c54bd3449d27ec7d6bdda"
  },
  {
    "url": "guide/userManual/10-message.html",
    "revision": "97e7930df557c39b59d42f083c45f591"
  },
  {
    "url": "guide/userManual/11-monitor.html",
    "revision": "1e6215916998230cb5984e3ca8a378a4"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "b153b783b691b79168edb13bbae4a8cc"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "b153b783b691b79168edb13bbae4a8cc"
  },
  {
    "url": "index.html",
    "revision": "1dbf4e1d6b41c03e6969f8257e6153f5"
  },
  {
    "url": "live2d/hibiki/assets/moc/hibiki.2048/texture_00.png",
    "revision": "730252369524e7a1c21308cb84acd465"
  },
  {
    "url": "logo-head.png",
    "revision": "b153b783b691b79168edb13bbae4a8cc"
  },
  {
    "url": "logo.png",
    "revision": "af435595b236f72c8760f681d2e1f267"
  },
  {
    "url": "miscellaneous/release-notes.html",
    "revision": "13ea8c9baa6d359909fd6d67ac59e4da"
  },
  {
    "url": "userManual/addAapplication.png",
    "revision": "b99b6742092ed3591b6a51e5a3a70014"
  },
  {
    "url": "userManual/addApi.png",
    "revision": "2869d3d497c6578c20783f390ef05ac5"
  },
  {
    "url": "userManual/addColor.png",
    "revision": "f0dbd232139040e7c53f00065d3ba10c"
  },
  {
    "url": "userManual/addDynamicField.png",
    "revision": "7b6c5063d029eb99e8c6192e60d2bbbd"
  },
  {
    "url": "userManual/addField.png",
    "revision": "7a175af8151a18e1f2ca69ca385db38c"
  },
  {
    "url": "userManual/addManagementUnit.png",
    "revision": "1f8b895d2d2f6e242d7ebc6111fe922d"
  },
  {
    "url": "userManual/addMenu.png",
    "revision": "7bc868052cf1a210ce852c68f13a2e7c"
  },
  {
    "url": "userManual/addMenuCustom.png",
    "revision": "de00c0c2f0f45a241b52acf87c4240e3"
  },
  {
    "url": "userManual/addOrg.png",
    "revision": "68e04022e1bdb4694fc0baec640347e2"
  },
  {
    "url": "userManual/addPageConfigGroup.png",
    "revision": "868ff2e48a9ef8364b6a1926d766c98a"
  },
  {
    "url": "userManual/addRole.png",
    "revision": "f9203d97a5b81f337af23be0697833a2"
  },
  {
    "url": "userManual/addScheduledTask.png",
    "revision": "966d80bf8fab4d64d2f2e947c959fed3"
  },
  {
    "url": "userManual/addSystemCode.png",
    "revision": "fd19a6ab709b4c124eccdd75b2d35ec3"
  },
  {
    "url": "userManual/addSystemCode1.png",
    "revision": "938c833e01d2ffeab979993ba71c652c"
  },
  {
    "url": "userManual/addTenant.png",
    "revision": "04cb1d914070fbdb20dc5db6d577c68f"
  },
  {
    "url": "userManual/addType.png",
    "revision": "407897737d458fc365dba051a533c206"
  },
  {
    "url": "userManual/addUser.png",
    "revision": "6582183264744f44befa59c7a3da7b7a"
  },
  {
    "url": "userManual/adminMsg.png",
    "revision": "5924e759c46d18248ca9f44e3c59f02e"
  },
  {
    "url": "userManual/api.png",
    "revision": "ba05d47b9ec37cada3e2de5a313e550d"
  },
  {
    "url": "userManual/apiLog.png",
    "revision": "790f5a75d8c9ce35991a53e4769e307f"
  },
  {
    "url": "userManual/apiLogInfo.png",
    "revision": "d9f6388e31809519cf3d8351d9810f72"
  },
  {
    "url": "userManual/application.png",
    "revision": "32350c203f3b74bd9a0df0134d1b1d6b"
  },
  {
    "url": "userManual/color.png",
    "revision": "87839a8fb23de708e7d5b290365636e4"
  },
  {
    "url": "userManual/configField.png",
    "revision": "e09f976a1b261da2dcecbf511b710374"
  },
  {
    "url": "userManual/configOrg.png",
    "revision": "52f4bfb9185507a4519c826ffa5343e2"
  },
  {
    "url": "userManual/configRole.png",
    "revision": "b0626416e895b284186d95ec7e5c6425"
  },
  {
    "url": "userManual/configRoleMenu.png",
    "revision": "c814ab10203799dec93a7cb6c46008ea"
  },
  {
    "url": "userManual/configTenant.png",
    "revision": "0512cffffe7bcf13bdd9b3a83cd94d9e"
  },
  {
    "url": "userManual/configUser.png",
    "revision": "17d5a89ae5c40379b88de17287bdb534"
  },
  {
    "url": "userManual/contextMenu.png",
    "revision": "6f11985c13fc69347bf268b8ca8a5ae8"
  },
  {
    "url": "userManual/createProcess.png",
    "revision": "d6b325f4c507b9d05f20f5de097da133"
  },
  {
    "url": "userManual/dateLog.png",
    "revision": "e961a4ce79bdf31139ed6c58edebdf8e"
  },
  {
    "url": "userManual/deleteManagementUnit.png",
    "revision": "73db89dcf06c0ba68bc47a9ade5b1698"
  },
  {
    "url": "userManual/deleteProcess.png",
    "revision": "d4b8ad9447e56be2c571895af88929c9"
  },
  {
    "url": "userManual/deploymentProcess.png",
    "revision": "7275b6f5092788f9f5c2890b407fd402"
  },
  {
    "url": "userManual/dynamicFieldManagement.png",
    "revision": "84556240e44d32c5019401457dc13d4b"
  },
  {
    "url": "userManual/editField.png",
    "revision": "df67e21b7d85e2818173ac065609b737"
  },
  {
    "url": "userManual/editOrg.png",
    "revision": "03ef4253b487f79696d01dc3df2777bb"
  },
  {
    "url": "userManual/editProcess.png",
    "revision": "593bb0ab165c6ed83fa16714a8be7a0b"
  },
  {
    "url": "userManual/editProcessAttr.png",
    "revision": "a5240622681bab4f749edb72b5f1169b"
  },
  {
    "url": "userManual/editProcessTask.png",
    "revision": "a3f33ad2e4cfa8c7ed05557022e1db1e"
  },
  {
    "url": "userManual/editRole.png",
    "revision": "15542742dbacf92c2b6310e56a512322"
  },
  {
    "url": "userManual/editType.png",
    "revision": "cd24e0af4c4c73b56cac3b0999b991aa"
  },
  {
    "url": "userManual/editUserMessage.png",
    "revision": "9482300267ab3f1ffa13f1e55e8181c1"
  },
  {
    "url": "userManual/editUserPassword.png",
    "revision": "a66f3935c85846543877761a5a5f660a"
  },
  {
    "url": "userManual/executiveHistory.png",
    "revision": "63916f8c10873481c5db6a458f5ad380"
  },
  {
    "url": "userManual/field.png",
    "revision": "b8001fd4c2ac01b131becd9025c834f6"
  },
  {
    "url": "userManual/historyTask.png",
    "revision": "00205efb2f0c5bde698f60fd41f216e0"
  },
  {
    "url": "userManual/homepage1.png",
    "revision": "9f3c3185bcff3fc612f6c53efc39ae13"
  },
  {
    "url": "userManual/homepage2.png",
    "revision": "4ffff5036e63dd32666c10155de39b69"
  },
  {
    "url": "userManual/illegalLog.png",
    "revision": "8f269ad9312f50ef701fdea49c83ad4c"
  },
  {
    "url": "userManual/login1.png",
    "revision": "c553588dda12f0e04f9f1d56b0e391d2"
  },
  {
    "url": "userManual/login2.png",
    "revision": "151add1ff7aef6a88bdbb3be326a8b6b"
  },
  {
    "url": "userManual/loginLog.png",
    "revision": "3010ee8c4fd4de2fbad980308a5b4c44"
  },
  {
    "url": "userManual/managementUnitConf.png",
    "revision": "aaf1c503b126cb5db060a6db736994b9"
  },
  {
    "url": "userManual/menu.png",
    "revision": "252708554d0b0b6de1f8fe2f89e5d328"
  },
  {
    "url": "userManual/menuAPI.png",
    "revision": "dd9afd97a5edd3a6b315f3a712d2a311"
  },
  {
    "url": "userManual/menuCustom.png",
    "revision": "3d325056fd30ddc83bf3d318a5e34f29"
  },
  {
    "url": "userManual/menuLocate.png",
    "revision": "68e2d4212ccde7b42f2ef6ea9d56ebfa"
  },
  {
    "url": "userManual/menuLog.png",
    "revision": "5ca0467c0f7ed085e72b6a8d0ed14af4"
  },
  {
    "url": "userManual/monitor.png",
    "revision": "08c726bdcbd00e08a886661c3b0f19ac"
  },
  {
    "url": "userManual/monitorHistory.png",
    "revision": "fb18581868a7645353683fe51bfe29ee"
  },
  {
    "url": "userManual/myProcessInstance.png",
    "revision": "1aa4d9c11521caf4e0e8151a853887a3"
  },
  {
    "url": "userManual/myTask.png",
    "revision": "73947f4f5ea4816ba12b114bb0107168"
  },
  {
    "url": "userManual/org.png",
    "revision": "0d70f6891edb85816be32a6d65c271ce"
  },
  {
    "url": "userManual/orgUser.png",
    "revision": "5052d9e13eed32a5d8702414e464939b"
  },
  {
    "url": "userManual/pageConfig.png",
    "revision": "5f8d795b3d91d0b4ea3d57c7ba87d52e"
  },
  {
    "url": "userManual/pageConfigGroup.png",
    "revision": "009eb31987d4650cac75ec2ed6faaf58"
  },
  {
    "url": "userManual/processConfig.png",
    "revision": "03fdf74fab746f22ed912727e9377fcc"
  },
  {
    "url": "userManual/processDesign.png",
    "revision": "1b617c204c25446ef2196463cd28ca14"
  },
  {
    "url": "userManual/processGroup.png",
    "revision": "df92072075f157f2f9b47202b509969a"
  },
  {
    "url": "userManual/processInstance.png",
    "revision": "d200314aec90914ae5516777dfd1ac0e"
  },
  {
    "url": "userManual/processTask.png",
    "revision": "b6adc9782c3de572be8587486c2c9e26"
  },
  {
    "url": "userManual/resetPassword.png",
    "revision": "f358a976c8776615c89f0d0842ea824a"
  },
  {
    "url": "userManual/resetPasswordRecord.png",
    "revision": "29175a1775202c5427741d2084a0ce72"
  },
  {
    "url": "userManual/role.png",
    "revision": "256a3494f09988c1bb7ecb31af45f9fc"
  },
  {
    "url": "userManual/scheduledTaskConfig.png",
    "revision": "429d048ea822552b9bf76ffa8d28f32b"
  },
  {
    "url": "userManual/setDate.png",
    "revision": "bcecbedabd49b938910bc8122dd28b13"
  },
  {
    "url": "userManual/startStopUser.png",
    "revision": "d81bf6233c18f6331444d703c99b75b2"
  },
  {
    "url": "userManual/systemCode.png",
    "revision": "89b308667c22afddabf9cb54a5a2a850"
  },
  {
    "url": "userManual/tenant.png",
    "revision": "593b0c8a9cd3d7cb10ceb0c3b394af1a"
  },
  {
    "url": "userManual/tenantInfo.png",
    "revision": "18cd2865ad17d84cf343d2a1c31db34b"
  },
  {
    "url": "userManual/typeConfig.png",
    "revision": "b7336a4bf82e1d8011a2fd7266d17465"
  },
  {
    "url": "userManual/userConfigList.png",
    "revision": "5fced0a875fd89d34c5989be6eea8861"
  },
  {
    "url": "userManual/userMsg.png",
    "revision": "275086820c77ee22b46d3ccc247955df"
  },
  {
    "url": "userManual/viewApi.png",
    "revision": "5d0a7258bb4bad973cc9f5b7c1805cbc"
  },
  {
    "url": "userManual/viewContextMenu.png",
    "revision": "c6a9c2ca69717491bc249d32d9fcf973"
  },
  {
    "url": "userManual/viewMonitor.png",
    "revision": "577a94e2f126345adc039475c978d613"
  },
  {
    "url": "userManual/viewPageConfigGroup.png",
    "revision": "c865e314fb57101532766a938160ad89"
  },
  {
    "url": "userManual/viewProcess.png",
    "revision": "9c6c2a007b1a921a58f78a0ff1a5a333"
  },
  {
    "url": "userManual/viewProcessInstance.png",
    "revision": "f2fc3910dd55b41dfbc06b3d1529409d"
  },
  {
    "url": "userManual/viewProcessTask.png",
    "revision": "c9c9b778f2ace44551a342c503ed1de2"
  },
  {
    "url": "userManual/viewReceives.png",
    "revision": "ef10bdafdedac51587eb808564e4ca62"
  },
  {
    "url": "userManual/viewUserMsg.png",
    "revision": "4c66f94f451422e0f5ab9e499383cf58"
  },
  {
    "url": "zh/development/index.html",
    "revision": "c0c7259aa2e7edbd1a49548822ee93e9"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "400553db872eca261258152d6e913741"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "c9d32df5edc00823a3cd9340286eb960"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "8a5dfb1000e1836b3566dcd2f837edb6"
  },
  {
    "url": "zh/guide/prepare.html",
    "revision": "701642b513d86dce7566fbbb84122194"
  },
  {
    "url": "zh/guide/redis-sentry.html",
    "revision": "29b3d3c27579c310ad8506e0f735fb43"
  },
  {
    "url": "zh/guide/run.html",
    "revision": "73cbc94c0f154896da5474ac503e2ed4"
  },
  {
    "url": "zh/guide/userManual/01-introduction.html",
    "revision": "501c507783599d79d3f635ce867e5e4a"
  },
  {
    "url": "zh/guide/userManual/02-login.html",
    "revision": "9c21603bb6a22bd29062e337ebbd36c5"
  },
  {
    "url": "zh/guide/userManual/03-organization.html",
    "revision": "a7435e3e7a963d19d8beb28c00912604"
  },
  {
    "url": "zh/guide/userManual/04-authority.html",
    "revision": "c10ef69864c8f7fa65d1c4f9207b4305"
  },
  {
    "url": "zh/guide/userManual/05-system-settings.html",
    "revision": "dc17a5bd24e30e40995820ee8eea2945"
  },
  {
    "url": "zh/guide/userManual/06-application-settings.html",
    "revision": "9b113e8b7413838b9899cff2192d74f1"
  },
  {
    "url": "zh/guide/userManual/07-my-task.html",
    "revision": "ba86acbb44b62073a01c03464d4d4968"
  },
  {
    "url": "zh/guide/userManual/08-workflow.html",
    "revision": "4b047c3d3248be54022ae992e397d00e"
  },
  {
    "url": "zh/guide/userManual/09-timed-task.html",
    "revision": "7e350a98f2ae69eea0c41c84eb2bd489"
  },
  {
    "url": "zh/guide/userManual/10-message.html",
    "revision": "e551549cd1a35ab2cb4fc94ba5323bc1"
  },
  {
    "url": "zh/guide/userManual/11-monitor.html",
    "revision": "907735efb79d95f071a71781e9b46e59"
  },
  {
    "url": "zh/index.html",
    "revision": "2a486a916478a256991083eab55473ce"
  },
  {
    "url": "zh/miscellaneous/release-notes.html",
    "revision": "b0953b8354bc8b4786aa42bc8a5821cd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
