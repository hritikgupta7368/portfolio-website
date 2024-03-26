import { NextResponse } from "next/server";
import { handler } from "tailwindcss-animate";

export async function GET(req){
    let username = process.env.GITHUB_USERNAME
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
            throw new Error('Failed to fetch user repositories');
        }
        const data = await response.json();
        const filteredData = data.filter(repo => !repo.fork && repo.homepage !== null && repo.homepage.length > 0) .map(repo => ({
            name: repo.name,
            description: repo.description,
            homepage: repo.homepage,
        }));
        return NextResponse.json({data : filteredData})
    }
    catch(error){
        return NextResponse.json({error : error?.message})
    }
   
}