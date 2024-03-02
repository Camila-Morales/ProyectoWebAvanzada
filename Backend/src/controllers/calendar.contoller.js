import CalendarUsers from "../models/CalendarUsers.js";

export const addCalendar=async(req,res)=>{
    const {userName,day}=req.body;
    const data = new CalendarUsers({userName:userName,day:day})
    await data.save();
    res.send(data)
}
export const data = async (req, res) => {
    const { userName } = req.params;
    // Using await and Promise.all for parallel execution:
    const users = await CalendarUsers.find({ userName: userName });
  
    if (users.length === 0) {
      res.status(404).json({ message: 'No users found' });
    } else {
      res.status(200).json(users);
    }
  };
  