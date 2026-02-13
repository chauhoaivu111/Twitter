import { getAvatarUrl, getPhotoUrl } from "../../utils/avatarUrl";

const Profile_data = [
  {
    backdrop: getPhotoUrl("profile-cover", 1200, 400),
    avatar_profile: getAvatarUrl(10, 150),
    icon_join: "bx bx-calendar",
    joined_date: "Joined March 2021",
    Name: "Hoài Vũ",
    Sub_name: "@Hoaivu220802001",
    following: "20 Following",
    followers: "30 Followers",
  },
];

export const Sub_profile_data = [
  {
    iamge: getAvatarUrl(11),
    icon: "bx bxs-user",
    user_follow: "Hoài Vũ and Phung Nhi Follow",
    Name: "Hoài Phong ",
    Sub_name: "@HoaiPhong01011995",
    content: "nghỉ mát cùng gia đình",
    route: "/Profile",
  },
  {
    iamge: getAvatarUrl(12),
    icon: "bx bxs-user",
    user_follow: "Hoài Vũ and Phung Nhi Follow",
    Name: "Hoai Vu ",
    Sub_name: "@HoaiPhong01011995",
    content: "nghỉ mát cùng gia đình",
    route: "/Profile",
  },
];

export default Profile_data;
