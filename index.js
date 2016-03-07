 System.config({
        packages: {        
          app: {
            format: 'register',
            defaultExtension: 'js'
          }
        }
      });
      System.import('app/popup/popup')
            .then(null, console.error.bind(console));