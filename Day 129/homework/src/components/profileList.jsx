import ProfileCard from "./profileCard"

const ProfileList = ({profiles}) => {


    return (
        <div>
            {profiles.map((profiless) => (
                <ProfileCard key={profiles.id} {...profiless}/>
            ))}
        </div>
    )
}


export default ProfileList