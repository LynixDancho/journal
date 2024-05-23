import  {NextResponse} from "next/server"
export async function GET({word}){
return NextResponse.json({
    word:"world"



})




}