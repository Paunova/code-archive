- node-sass installation
  - Windows `npm --add-python-to-path='true' install --global --production windows-build-tools`
  - Node [compatible versions](https://www.npmjs.com/package/node-sass#supported-nodejs-versions-vary-by-release-please-consult-the-releases-page--below-is-a-quick-guide-for-minimum-support)
- React
  - *Redux action not firing up.* Redux actions are imported in file and then dispatched as prop functions.
    
    Often times are being called directly as imported functions instead of being dispatched from props.
