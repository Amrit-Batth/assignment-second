export const validateEmail = (req, res, next) => {
    try {
        const email = req.params.email || req.body.email;

        if (!email) {
            return res.status(400).json({ message: "Email is required!" });
        }

        // Basic email validation without regex
        if (!email.includes("@") || !email.includes(".")) {
            return res.status(400).json({ message: "Invalid email format!" });
        }

        const atIndex = email.indexOf("@");
        const dotIndex = email.lastIndexOf(".");

        // Ensure '@' appears before '.' and both are in a valid position
        if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex === email.length - 1) {
            return res.status(400).json({ message: "Invalid email format!" });
        }

        if(email.length < 10) {
            res.status(400).json({message:"email length is too short"});
        }

        req.email = email; // Store the validated email in the request object
        next(); // Proceed to the next middleware
    } catch (err) {
        return res.status(500).json({ message: "Server error", error: err.message });
    }
};

export const validateName = (req,res,next)=>{
    try {
        const name = req.body.name;
        if(name.length < 5) {
            res.status(400).json({message:"Name length is too short"});
        }
        req.body.name = name;
        next();
    }catch(err) {
        res.status(500).json({error : err.message});
    }
    next()
};