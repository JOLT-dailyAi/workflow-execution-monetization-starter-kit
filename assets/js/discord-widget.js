/*
=============================================================================
CUSTOMIZATION CHECKLIST - discord-widget.js
=============================================================================
REQUIRED CHANGES (Search for this exact string):
☐ Search: "https://discord.gg/AEJvSEWcZk" → Replace with your Discord server invite URL
   → Get your invite: Discord Server → Right-click channel → Create Invite

NO OTHER CHANGES NEEDED:
✓ Simple click handler for Discord floating button
✓ Opens Discord in new tab when clicked
✓ Works with floating button defined in index.html
=============================================================================
*/

// Discord Direct Link Handler
document.addEventListener('DOMContentLoaded', function() {
  const discordBtn = document.getElementById('discordFloatingBtn');
  
  if (discordBtn) {
    // Direct redirect to Discord server
    discordBtn.addEventListener('click', function(e) {
      e.preventDefault();
      // TODO: Replace with your Discord server invite URL
      window.open('https://discord.gg/AEJvSEWcZk', '_blank');
    });
  }
});
