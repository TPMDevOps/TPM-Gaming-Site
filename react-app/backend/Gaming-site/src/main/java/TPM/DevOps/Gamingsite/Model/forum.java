package TPM.DevOps.Gamingsite.Model;

import javax.persistence.*;

@Entity
public class Title {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    private String title;
    private String body;
    

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
