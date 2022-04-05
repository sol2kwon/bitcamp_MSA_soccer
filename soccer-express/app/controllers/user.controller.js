    exports.signup = ("/signup",(req,res)=>{
    const {userName,password,name,telephone} = req.body
      console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
      console.log(`userName 값 : ${userName}`)
      console.log(`password값 : ${password}`)
      console.log(`name 값 : ${name}`)
      console.log(`telephone 값 : ${telephone}`)
      res.status(200).json({'result':'ok'})
  })
  