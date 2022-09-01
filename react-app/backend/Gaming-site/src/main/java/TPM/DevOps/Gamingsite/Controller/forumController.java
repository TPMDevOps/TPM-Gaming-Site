package TPM.DevOps.Gamingsite.Controller;

import TPM.DevOps.Gamingsite.Model.forum;
import TPM.DevOps.Gamingsite.Repository.forumRepo;
import com.fasterxml.jackson.core.io.JsonEOFException;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Collection;

@CrossOrigin
@RestController
public class forumController {
    @Resource
    private forumRepo repo;

    @GetMapping("/forum")
    public Collection<forum> getForums() {
        return (Collection<forum>) repo.findAll();
    }

    @PostMapping("/api/forum/new-post")
    public Collection<forum> addForums(@RequestBody String body) throws JSONException {
        JSONObject newForums = new JSONObject(body);
        String title = newForums.getString("title");
        String fBody = newForums.getString("body");

        forum forumToAdd = new forum(title, fBody);
        repo.save(forumToAdd);

        return (Collection<forum>) repo.findAll();

    }
}