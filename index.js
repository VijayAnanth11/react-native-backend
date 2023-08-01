const express = require('express');
const port = 3000;

const app = express();
const bodyParser = require('body-parser');
// 
require('./db');
require('./models/User');
require('./models/Membership');

require('./models/Attendance');
require('./models/Health');
require('./models/Payment');
require('./models/Profile');
require('./models/ScheduleUser');
require('./models/Trainer');
require('./models/Usage');

//
const userRoutes = require('./routes/userRoutes');
const MembershipRoutes = require('./routes/MembershipRoutes')

const AttendanceRoutes = require('./routes/AttendanceRoutes')
const HealthRoutes = require('./routes/HealthRoutes')
const PaymentRoutes = require('./routes/PaymentRoutes')
const ProfileRoutes = require('./routes/ProfileRoutes')
const ScheduleUserRoutes = require('./routes/ScheduleUserRoutes')
const TrainerRoutes = require('./routes/TrainerRoutes')
const UsageRoutes = require('./routes/UsageRoutes')


const requireToken = require('./Middlewares/AuthTokenRequired');
//
app.use(bodyParser.json());
app.use(userRoutes);
app.use(MembershipRoutes);

app.use(AttendanceRoutes);
app.use(HealthRoutes);
app.use(PaymentRoutes);
app.use(ProfileRoutes);
app.use(ScheduleUserRoutes);
app.use(TrainerRoutes);
app.use(UsageRoutes);

//

app.get('/',requireToken, (req, res) => {
    console.log(req.user);
    res.send(req.user);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})