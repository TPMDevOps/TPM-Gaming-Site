package TPM.DevOps.Gamingsite.Controller;

import TPM.DevOps.Gamingsite.Model.User;
import TPM.DevOps.Gamingsite.Repository.UserRepository;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    public void createUser(User user) {
        userRepository.save(user);
    }

    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public boolean usernameExists(String username) {
        return userRepository.existsByUsername(username);
    }

    @GetMapping("/signup")
    public Collection<User> getAllUsers() {
        return (Collection<User>) userRepository.findAll();
    }


    @PostMapping("/api/signup/new-user")
    public Collection<User> addUsers(@RequestBody String body) throws JSONException {
        JSONObject newUsers = new JSONObject(body);
        String username = newUsers.getString("username");
        String email = newUsers.getString("email");
        String password = newUsers.getString("password");

        User userToAdd = new User(username,email,password);
        userRepository.save(userToAdd);


        return (Collection<User>) userRepository.findAll();


    }
}
