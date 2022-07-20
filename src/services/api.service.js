
const url = 'https://api.spacexdata.com/v3/rockets'

function  restructureData (data){
    const arr =[]
data.forEach((data)=>{

  arr.push({
      id:data.id,
      name:data.rocket_name,
      type:data.rocket_type,
      flickr_images:data.flickr_images[0]
  })
})
}
export const getRocketData =async (job,thunkAPI)=>{
    try{
 const response = await fetch(url,job)
 const data = await response.json()
  const data2 = restructureData(data)
  return data2
    }catch{
        return thunkAPI.rejectWithValue('something went wrong')
    }

}