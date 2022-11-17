/*
File: app.js
Date: 10.11.2022

NAME: xTrak - Incident Reporting
Description: xTrak is a web app platform to capture data for incident. The reports are saved and organized in a list. 

---- DEVELOPERS ----
Tim Upton – 301259058 
Pedro Da Silva Dergado – 301239283 
Alex Damovski – 301192233 
Tyler Mercier – STUDENT NUM 
Danill Velykyi - 301183618
Cathy Da - 301177731 
*/
(function()
{
    function Start()
    {
        console.log("App Started!");
    }

    window.addEventListener('load', Start);
})();

    //HIDE OR SHOW ARCHIVED INCIDENT LIST
    document.getElementById("ArchiveBox").style.display = 'none';
    ArchiveBtn.addEventListener('click', function handleClick() {
        if (ArchiveBox.style.display === 'none') {
            ArchiveBox.style.display = 'block';
      
            ArchiveBtn.textContent = 'Hide Archived Incidents';
        } else {
            ArchiveBox.style.display = 'none';
      
            ArchiveBtn.textContent = 'View Archived Incidents';
        }
      });