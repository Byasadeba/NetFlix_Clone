const User = require("../models/userModel");

module.exports.addToLikedMovies = async (req, res) => {
    try {
      const { email, data } = req.body;
      
      const user =  await User.findOne({ email });
      
      
      if (user) {
        const { likedMovies } = user;
        
        const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);
        
        if (!movieAlreadyLiked) {
          await User.findByIdAndUpdate(
            user._id,
            {
              likedMovies: [...user.likedMovies, data],
            },
            { new: true }
          );

        } else return res.json({ msg: "Movie already added to the liked list." });
      } else await User.create({ email, likedMovies: [data] });
    

      return res.json({ msg: "Movie successfully added to liked list." });
    } 
    catch (error) {
      return res.json({ msg: "Error adding movie to the liked list" });
    }
  };

module.exports.getLikedMovies = async(req,res)=>{
    try {
      const {email} = req.params;
      const user = await User.findOne({email});
      if(user){
        res.json({message:"succes", movies:user.likedMovies})
      }else{
        return res.json({message:"user With given email is not Found"})
      }
    } catch (error) {
        return res.json({ msg: "Error Fetching movies from  the liked list" });

    }
}

module.exports.removeFromlikedmovies = async (req,res)=>{
  try {
    const { email, movieId } = req.body;
      
      const user =  await User.findOne({ email });
      
      
      if (user) {
        const { likedMovies } = user;
        
        const movieIndex = likedMovies.findIndex(({id})=> id===movieId)  
        
        if(!movieIndex){
          res.json({msg:"Movie Not Found"});
        }
        
        likedMovies.splice(movieIndex, 1);

        
          await User.findByIdAndUpdate(
            user._id,
            {
              likedMovies,
            },
            { new: true }
          );

        
          return res.json({message:"Movie Removed Succesfullly", movies:likedMovies})
      }
    
  } catch (error) {
    return res.json({ msg: "Error In Removing from Liked List"})
  }
}
