import { useEffect, useState } from "react"
import axios from "axios";
import { Card, CardContent, CardMedia } from "@mui/material";

export default function Country(){
    const [data,setData] = useState([])

    const fetchData = async() => {
        try {
            const response = await axios.get("https://xcountries-backend.azurewebsites.net/all")
            setData(response.data)
        } catch (error) {
            console.error("Error fetching data:", error.message || error);
        }

    }
    useEffect(() => {
        fetchData()
    },[])
    return (
        <>
            <div className="container" style={{display:"flex", flexWrap:"wrap", gap:"10px", justifyContent:"center"}}>
            {
                data.map((country,index) => {
                    const {name,flag,abbr} = country
                    return(
                        <Card key={abbr ? `${abbr}-${index}` : `country-${index}`} style={{display:"flex",flexDirection:"column",textAlign:"center",justifyContent:"center",alignItems:"center",border:"1px solid black",width:"200px", height:"200px",borderRadius:"5px"}}>
                            <CardMedia
                                component="img"
                                image={flag}
                                alt={name}
                                sx={{
                                    width:"100px",
                                    height:"100px",
                                    mt:"10px"
                                }}
                            />
                            <CardContent>
                                <h3>{name}</h3>
                            </CardContent>
                        </Card>
                    )
                })
            }
            </div>
        </>
    )
}