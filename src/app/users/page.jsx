import React from "react";
import Link from "next/link";

const UserPage = () => {
    return (
        <>
            <div>User Awesome Page</div>
            <Link href="/">back to main page</a> 
            {/* EXAMPLE OF BAD WAY TO NAVIGATE - use the Link component instead*/}
        </>
    )
}

export default UserPage