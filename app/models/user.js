exports.findOrCreate = function (data, done) {

      /* LOCAL */
    if (data.email) {
        User.all({
            where: {
                email: data.email
            }, limit: 1
        }, function (err, user) {
            if (user[0]) return done(err, user[0]);
            if (!user[0]) return done(err);
        });
    } else

    /* SOMETHING NOT KNOWN YET */
    {
        console.log(data.profile);
    }
};