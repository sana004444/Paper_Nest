# 📄 Paper Nest

**Paper Nest** is a mini research paper submission web app inspired by EasyChair, developed by a student of **CUST University**. It allows authors to register, submit research papers with complete metadata, and manage their submissions. The system also supports reviewer and chair (admin) roles.

---

## 👥 User Roles and Permissions

### ✍️ Author
- Register, login, and access dashboard
- Submit papers with full metadata
- Edit submissions before the deadline
- View review results and final decisions
- Upload final (camera-ready) versions if accepted

**Mandatory Fields:**
| Field                  | Type        | Description                          |
|------------------------|-------------|--------------------------------------|
| Paper Title            | Text        | Title of the submission              |
| Abstract               | Text area   | Short summary of the work            |
| Author Name(s), Email(s)| Text input | Used for listing and contact         |
| Corresponding Author   | Radio select| Contact point for conference         |
| File Upload            | File (PDF)  | PDF version of the paper             |
| Agreement Checkbox     | Checkbox    | Author confirms submission rules     |

**Optional Fields:**
- ORCID ID
- Website/URL
- Author Bio

---

### 🕵️ Reviewer
- Login and access assigned papers
- Submit reviews with evaluation criteria
- Edit reviews before the deadline
- Add comments for authors and private notes for chairs

**Evaluation Form:**
| Field                         | Type       | Description                         |
|-------------------------------|------------|-------------------------------------|
| Overall Evaluation Score      | Dropdown   | Accept–Reject scale                 |
| Comments to Authors           | Text area  | Reviewer feedback                   |
| Category Ratings (min 2)      | Dropdowns  | Originality, Technical Quality, etc |

**Optional Fields:**
- Private Comments to Chairs
- Suggested Changes

---

### 🧑‍💼 Chair (Conference Admin)
- Create and configure conferences
- Add chairs, reviewers, and manage roles
- Monitor submissions and assign reviewers
- Make decisions and notify authors

**Mandatory Functions:**
- Assign reviewers
- View reviews
- Make accept/reject decisions
- Notify authors

**Optional Configurations:**
- Add conference logo, website, sponsorship info, custom guidelines

---

## 🛠️ Technologies Used

- **HTML5** – Structure  
- **CSS3** – Styling and layout  
- **JavaScript** – Form logic  
- **Git & GitHub** – Version control and hosting  

---

## 🚀 How to Use

1. **Clone the Repository**
   ```bash
   git clone https://github.com/sana004444/Paper_Nest.git
