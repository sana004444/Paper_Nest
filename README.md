# 📄 Paper Nest

**Paper Nest** is a research paper submission web application modeled after EasyChair. It allows authors to submit academic work, reviewers to evaluate submissions, and chairs to manage the review process and decisions.

---

## 👥 User Roles & Permissions

### ✍️ Author

**Mandatory Features:**
- Register, log in, and access personal dashboard
- Submit papers with required metadata
- Edit submission before specified deadline
- View review results and final decision
- Upload camera-ready version if accepted

**Mandatory Fields (Submission Form):**
- Paper Title
- Abstract
- Author Names and Emails
- Corresponding Author selection (yes/no)
- PDF Upload
- Topics selection (checkboxes)
- Agreement to submission terms (checkbox)

**Optional Fields:**
- ORCID ID
- Personal or academic profile URL
- Author biography
- Upload presentation slides (if accepted)

---

### 🕵️ Reviewer

**Mandatory Features:**
- Register and log in as reviewer
- View only assigned papers
- Rate at least two evaluation categories
- Provide comments for authors
- Edit review before deadline

**Optional Reviewer Features:**
- Private notes visible only to chairs
- Suggested improvements
- Conflict-of-interest declaration
- Anonymity or double-blind support
- Weighted scoring or custom evaluation rubrics

---

### 🧑‍💼 Chair (Conference Admin)

**Mandatory Features:**
- Log in and manage conference
- Assign reviewers to each paper
- Monitor review progress
- View submitted reviews
- Make decisions (Accept/Reject/Revise)
- Notify authors of results
- Collect final versions of accepted papers

**Optional Chair Features:**
- Set submission deadlines and review periods
- Send bulk notifications to users
- View review statistics and submission tracking
- Add conference logo and branding
- Include external website links or sponsor info
- Provide customized submission/review guidelines
- Add registration links for accepted authors
- Generate acceptance letters and export data

---

### ⚙️ Platform Administrator (System-Level Admin)

**Optional Role (not part of specific conference flow):**
- Maintain the entire web platform
- Provide system-wide support and bug fixes
- Manage multiple conferences and users overall

---

## ✅ Minimum Requirements (MVP)

- Role-based login system (Author, Reviewer, Chair)
- Fully functional paper submission form
- Reviewer evaluation form with minimum criteria
- Chair dashboard for review assignments and decision making

---

## ✨ Optional Enhancements for Future Versions

- Author enhancements: ORCID, bio, personal links
- Reviewer enhancements: private notes, COI declaration, reminders
- Chair enhancements: deadlines, bulk emails, branding, analytics
- System-wide enhancements: public announcements, admin dashboards, password recovery, assignment algorithms

---

## 🛠️ Technologies Used

- HTML5 for page structure  
- CSS3 for styling  
- JavaScript for form handling and interactivity  
- Git & GitHub for version control and project hosting  

---

## 🚀 Getting Started

To run this project locally:
```bash
git clone https://github.com/sana004444/Paper_Nest.git
