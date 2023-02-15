module.exports = {
  src_folders: ["test"],
  globals_path: "globals/globals.js", 
  custom_commands_path: "./custom_commands",
  
  test_workers: {
    enabled: true,
  },
  
  webdriver: {
    start_process: true, 
    server_path: 'node_modules/.bin/chromedriver',
    port: 9515,
    ssl: false,
    default_path_prefix: '',
    proxy: undefined,
    cli_args: {}
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome'
      },
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: false,
        path: "screenshots"
      },
    }

  }
};