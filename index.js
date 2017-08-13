const app = require('./app/app').default;
app.listen(app.get('port'), () => {
    console.log(`app is running on port ${app.get('port')}`);
});