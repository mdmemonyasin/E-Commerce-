exports.get404 = (req, res, next) => {
    //    res.status(404).send('<h1>Page not found</h1>');
    // res.sendFile(path.join(rootDir, 'views', 'Error.html'));
    res.status(404).render('Error', {
        pageTitle: 'Page Not Found',
        path: '/404'
    });

};