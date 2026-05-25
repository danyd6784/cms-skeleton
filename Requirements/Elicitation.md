### High-Level Requirements Elicitation
- What problems need to be solved with this project?
    * Case Management is a notoriously difficult problem to solve. The goal of this project is to create a skeleton for a case management system that can be easily customized and extended to meet the specific needs of different organizations across different states and at different levels of the judicial system. The skeleton should provide a solid foundation for building a case management system that can handle the complexities of managing cases, including tracking case information, managing documents, and facilitating communication between different parties involved in the case.
    * Current solutions in the market do not meet users at where they are at. They expect all judges, magistrtates, referees, clerks, and attorneys to use the same system, which is not the case. This project aims to create a system that can be easily customized to meet the specific needs of different users and organizations.
    * There is currently little to no interface with cities, townships, and villages to update their ordinance information in a central repository for higher organizations to access and update. So there is a lot of stale information that is not being updated because there is no easy way to do so. This project aims to create a system that can facilitate the updating of ordinance information in a central repository, making it easier for higher organizations to access and update this information.
    * Current markets solutions are not open source, which limits the ability for users to customize and extend the system to meet their specific needs. This project aims to create an open source solution that can be easily customized and extended by users and organizations, leading to increased adoption and user engagement with the system.
- What is the justification for this project?
    * Villages, Cities, and Townships need an easy way to maintain their ordinance information in a standard format that can be easily accessed and updated by higher organizations. This project will provide a solution to this problem by creating a system that can facilitate the updating of ordinance information in a central repository.
    * Each role at different levels in the case management system has different needs so we need a way to not overload the system with features that are not relevant to certain users. This project will provide a solution to this problem by creating a system that can be easily customized to meet the specific needs of different users and organizations.
    * The current solutions in the market do not meet users at where they are at, which leads to frustration and inefficiency. This project will provide a solution to this problem by creating a system that can be easily customized to meet the specific needs of different users and organizations, leading to increased efficiency and user satisfaction.
- What is the scope of this project?
    * ordinance management for villages, cities, and townships
    * case management for judges, magistrates, referees, clerks, and attorneys
    * document management for cases
    * communication facilitation between different parties involved in the case
    * customization options for different users and organizations
- What are the major constraints of this project?
    * This project is open source, therefore it relies on community contributions and may face challenges in terms of funding and resources.
    * The project may face challenges in terms of adoption and user engagement, as it may require a shift in mindset and workflow for users who are accustomed to using existing solutions.
    * The project may face challenges in terms of scalability and performance, as it may need to handle a large amount of data and users.
    * The project may face challenges in terms of security and privacy, as it will be handling sensitive information related to cases and users.
- What are the major functional requirements of this project?
    * The system should allow users to create and manage cases, including tracking case information, managing documents, and facilitating communication between different parties involved in the case.
    * The system should allow users to manage ordinance information for villages, cities, and townships in a central repository.
    * The system should provide customization options for different users and organizations to meet their specific needs.
    * The system should provide a user-friendly interface that is easy to navigate and use for all users.
    * The system should provide robust security and privacy features to protect sensitive information related to cases and users.
- What does success look like for this project?
    * efficient and user-friendly case management system that meets the specific needs of different users and organizations.
    * increased adoption and user engagement with the system, leading to improved efficiency and user satisfaction.
    * a central repository for ordinance information that is regularly updated and easily accessible to higher organizations.
    * a strong and active community of contributors who are continuously improving and extending the system to meet the evolving needs of users and organizations.
- What users will be impacted by this project?
    * Judges, magistrates, referees, clerks, and attorneys who will use the case management system to manage their cases and facilitate communication between different parties involved in the case.
    * Villages, cities, and townships who will use the ordinance management system to maintain their ordinance information in a central repository.
    * Higher organizations such as state courts and administrative agencies who will access and update ordinance information in the central repository.
    * The general public who may have access to certain information related to cases and ordinances through the system.

### Detailed Requirements Elicitation
- What use cases exist for this project?
    * Clerks: create and manage cases, upload and manage documents, facilitate communication between different parties involved in the case, and enter citations, petitions, and other case initiating information.
    * Court Recorders: Update case information with court proceedings, set next hearing dates, and sentence information, as well as enter motions into register of actions.
    * Judges, Magistrates, and Referees: Access case information
    * Administators: manage user accounts, customize the system for their specific needs, and import document templates.
    * Villages, Cities, and Townships: manage ordinance and police agency information in a central repository, and update this information as needed.
    * Higher Organizations: Receive CMS data from lower organizations, access and update ordinance information in the central repository, and generate reports based on the data in the system.
    * The general public: access certain information related to cases and ordinances through the system, such as case status and ordinance information.
- How should data be structured and stored in the system?
    * A relational database should be used to store case information, ordinance information, user information, and other relevant data. The database should be designed to allow for easy querying and retrieval of data, as well to ensure data integrity and security. The database should also be designed to allow for scalability as the amount of data and users increases.
    * The system should also offer multiple options for exporting and importing data such as CSV, JSON, and XML to allow for easy integration with other systems and tools such as court recording software, document management systems, and reporting tools.
    * ideally all input should mimic the format of the physical forms that users are already familiar with to minimize the learning curve and increase user adoption. This will need to be balanced with the need for a user-friendly interface that is easy to navigate and use for all users and also accomodate differences in forms across different states and levels of the judicial system.
- 