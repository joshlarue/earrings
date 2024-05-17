'use client'

import {useState} from "react";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default function Page() {
    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const [file, setFile] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName);
        console.log(pass);
        console.log(process.env.NEXT_PUBLIC_ADMIN_PASSWORD);
        if (userName === process.env.NEXT_PUBLIC_ADMIN_USER && pass === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            setLoggedIn(true);
        } else {
            console.log("error");
        }
    }
    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }
    const handlePassChange = (e) => {
        setPass(e.target.value);
    }
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    return (
        <>

            <div className="w-full flex flex-col items-center justify-center">
                {!loggedIn ?
                    <div className="w-fit bg-primary p-10 shadow-md">
                        <form className={"flex flex-col gap-1"} onSubmit={handleSubmit}>
                            <label htmlFor={"username"}>Username:</label>
                            <input onChange={handleUserNameChange}
                                   className={"w-fit p-1 bg-primary-dark text-core-dark mb-5"} type={"text"}
                                   name={"username"} id={"username"} placeholder={"enter your username"}/>
                            <label htmlFor={"Password"}>Password:</label>
                            <input onChange={handlePassChange} className={"w-fit p-1 bg-primary-dark text-core-dark mb-5"}
                                   type={"text"} name={"password"} id={"password"} placeholder={"enter your password"}/>
                            <button type={"submit"}>submit</button>
                        </form>
                    </div>
                :
                    <div className={"w-[90%] bg-primary shadow-md p-10"}>
                        <label className={"hover:cursor-pointer bg-primary-dark p-5"} htmlFor={"fileInput"}>choose a photo</label>
                        <input onChange={handleFileChange} className={"hidden"} id={"fileInput"} name={"fileInput"} type={"file"} />
                    </div>
                }
            </div>
        </>
    );
}