import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import {useEffect, useState} from "react"
import { useAuth } from "../hooks/useAuth"

const BusinessDetailsInsurance = ({insurance}) => {
    const { user } = useAuth()
    const [myInsurance, setMyInsurance] = useState(null)
    const [myPlan, setMyPlan] = useState(null)
    const [myPlanType, setMyPlanType] = useState(null)
    useEffect(()=>{
        console.log('BusinessDetailsInsurance useEffect()')
        //console.log(insurance)
        const getPlan = async () => {
            console.log('inside getPlan')
            console.log(insurance)
            const p = await fetchObject(insurance.plan)
            const t = await fetchObject(insurance.plan_type)
            console.log("got plan")
            console.log(insurance)
            setMyInsurance(insurance)
            setMyPlan(p)
            setMyPlanType(t)
        }
        getPlan().then((p)=>{
                console.log("myInsurance, myPlan, myPlanType")
                console.log(myInsurance)
                console.log(myPlan)
                console.log(myPlanType)
            }
        )
    }, [insurance])

    const fetchObject = async (url) =>{
        let headers = new Headers()
        const token = user['token']
        const auth_str = 'Token '+token
        headers.set('Authorization', auth_str)
        const res = await fetch(url,{headers:headers})
        const data = await res.json()
        return data
    }

    return (
        <div className="container">
            <h2>Insurance Information</h2>
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            > 
            <div>
                <TextField 
                id="standard-basic" 
                label="Plan" 
                variant="standard" 
                value={myPlan ? myPlan.insurance_plan_name : ''}
                />
                <TextField 
                id="standard-basic" 
                label="Plan Type" 
                variant="standard" 
                value={myPlanType ? myPlanType.insurnace_plan_type_name : ''}
                />
            </div>
            <div> 
                <TextField 
                id="standard-basic" 
                label="Face Amount" 
                variant="standard" 
                value={myInsurance ? myInsurance.face_amount : ''}
                /> 
            </div>
            </Box>
        </div>
    )
}

export default BusinessDetailsInsurance