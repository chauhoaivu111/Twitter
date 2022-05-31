
import backdrop from '../../assets/image/backdrop.jpg';
import HV from '../../assets/image/HV.jpg';
import MC from '../../assets/image/MC.jpg'

const Profile_data =[
    {
        backdrop:backdrop,
        avatar_profile:HV,
        icon_join:"bx bx-calendar",
        joined_date:"Joined March 2021",
        Name:"Hoài Vũ",
        Sub_name:"@Hoaivu220802001",
        following:"20 Following",
        followers:"30 Followers"
    }
]

 export const Sub_profile_data = [
    {
        iamge:HV,
        icon:"bx bxs-user",
        user_follow:"Hoài Vũ and Phung Nhi Follow",
        Name:"Hoài Phong ",
        Sub_name:"@HoaiPhong01011995",
        content:"nghỉ mát cùng gia đình",
        route: "/Profile",
    },
    {
        iamge:MC,
        icon:"bx bxs-user",
        user_follow:"Hoài Vũ and Phung Nhi Follow",
        Name:"Hoai Vu ",
        Sub_name:"@HoaiPhong01011995",
        content:"nghỉ mát cùng gia đình",
        route: "/Profile",
    }
]

export default Profile_data;




