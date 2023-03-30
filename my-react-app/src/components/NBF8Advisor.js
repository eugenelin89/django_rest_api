// for selecting the advisor

import {useState, useEffect} from 'react'
import Select from 'react-select' // https://react-select.com/home

const NBF8Advisor = ({id, users, roles, updateAdvisor, selectedAdvisors, collaboratorStatuses, collaboratorPositions}) => {
    const [role, setRole] = useState({})
    const [advisor, setAdvisor] = useState({})
    const [collaboratorStatus, setCollaboratorStatus] = useState({})
    const [collaboratorPosition, setCollaboratorPosition] = useState({})

    const roleOptions = roles.map(
        (role)=>({
            value:role,
            label: role.user_role_name
        })
    )
    const advisorOptions = users.map(
        (user)=>({
            value:user,
            label: user.first_name+' '+user.last_name
            
        })
    )

    const collaboratorStatusOptions = collaboratorStatuses.map(
        (collaboratorStatus)=>({
            value:collaboratorStatus,
            label: collaboratorStatus.status_name
        })
    )

    const collaboratorPositionOptions = collaboratorPositions.map(
        (collaboratorPosition)=>({
            value:collaboratorPosition,
            label: collaboratorPosition.position_name
        })
    )

    useEffect(()=>{
        console.log('useEffect for NBF8Advisor ID: '+id)
        console.log('selectedAdvisors:')
        console.log(selectedAdvisors)
        if(selectedAdvisors[id]){
            console.log('selectedAdvisors[id]')
            console.log(selectedAdvisors[id])
            if(selectedAdvisors[id].role){
                console.log('selectedAdvisors[id].role')
                console.log(selectedAdvisors[id].role)
                setRole(selectedAdvisors[id].role)
            }
            if(selectedAdvisors[id].advisor){
                console.log('selectedAdvisors[id].advisor')
                console.log(selectedAdvisors[id].advisor)
                setAdvisor(selectedAdvisors[id].advisor)
            }
            if(selectedAdvisors[id].collaboratorStatus){
                console.log('selectedAdvisors[id].collaboratorStatus')
                console.log(selectedAdvisors[id].collaboratorStatus)
                setCollaboratorStatus(selectedAdvisors[id].collaboratorStatus)
            }
            if(selectedAdvisors[id].collaboratorPosition){
                console.log('selectedAdvisors[id].collaboratorPosition')
                console.log(selectedAdvisors[id].collaboratorPosition)
                setCollaboratorPosition(selectedAdvisors[id].collaboratorPosition)
            }
        }
        ///console.log(selectedAdvisors)
        //console.log(roleOptions)
        console.log('useEffect, updated role and advisor:')
        console.log(role)
        console.log(advisor)
    })
  
    return (
    <div>
    <h3>Debug {id}</h3>
    <Select
        options={advisorOptions}
        placeholder={selectedAdvisors[id] && selectedAdvisors[id].advisor? selectedAdvisors[id].advisor.first_name+' '+selectedAdvisors[id].advisor.last_name:'Select Advisor'}//'Select Advisor'
        onChange={(selectedOption)=>{
            console.log('selectedOption')
            console.log(selectedOption)
            setAdvisor(selectedOption.value)
            updateAdvisor(id, {advisor: selectedOption.value, role: role})
        }
        
    }
    />
    <Select 
        options={roleOptions}
        placeholder={selectedAdvisors[id] && selectedAdvisors[id].role? selectedAdvisors[id].role.user_role_name:'Select Role'}
        onChange={(selectedOption)=>{
            console.log('selectedOption')
            console.log(selectedOption)
            setRole(selectedOption.value)
            updateAdvisor(id, {advisor: advisor,role: selectedOption.value})
            
        }}
    />
    <Select
        options={collaboratorPositionOptions}
        placeholder={selectedAdvisors[id] && selectedAdvisors[id].collaboratorPosition? selectedAdvisors[id].collaboratorPosition.position_name:'Select Position'} 
        onChange={
            (selectedOption)=>{
                console.log('selectedOption')
                console.log(selectedOption)
                setCollaboratorPosition(selectedOption.value)
                updateAdvisor(id, {advisor: advisor, role: role,colaboratorStatus:collaboratorStatus, collaboratorPosition: selectedOption.value})
            }
        }
    />
    <Select 
        options = {collaboratorStatusOptions}
        placeholder={selectedAdvisors[id] && selectedAdvisors[id].collaboratorStatus? selectedAdvisors[id].collaboratorStatus.status_name:'Select Status'}
        onChange={
            (selectedOption)=>{
                console.log('selectedOption')
                console.log(selectedOption)
                setCollaboratorStatus(selectedOption.value)
                updateAdvisor(id, {advisor: advisor, role: role, collaboratorStatus: selectedOption.value})
            }
        }
    />
    </div>
  )
}

export default NBF8Advisor