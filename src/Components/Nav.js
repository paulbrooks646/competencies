import React, {useState} from 'react'

export default function Nav() {

    const [pic, setPic] = useState('https://urbaned.tcnj.edu/wp-content/uploads/sites/85/2019/10/placeholder-profile-1.png')
    const [username, setUsername] = useState()
    const [bio, setBio] = useState()
    const [genre, setGenre] = useState()
    const [author, setAuthor] = useState()
    const [book, setBook] = useState()

    return (
        <div style={{display: 'none'}}>
            {/* <img src={pic} style={{width: '100px'}}/> */}
        </div>
    )
}