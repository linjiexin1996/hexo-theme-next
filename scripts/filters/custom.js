hexo.extend.filter.register('theme_inject', function(injects) {
  injects.style.push('source/_data/custom.styl');
});

hexo.extend.filter.register('theme_inject', function(injects) {
  injects.bodyEnd.raw('load-custom-js', '<script src="../../scripts/love.js"></script>', {}, {cache: true});
});