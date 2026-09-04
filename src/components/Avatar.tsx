interface AvatarProps {
    image: string;
    FirstName: string;
    lastName: string;
}

function Avatar ({ image, FirstName, lastName }: AvatarProps) {
    console.log({ image, FirstName, lastName })
    return (
        <div>
            <img src={image} alt={`${FirstName} ${lastName}`} />
            <p>{FirstName} {lastName}</p>
        </div>
    )

}

export default Avatar;