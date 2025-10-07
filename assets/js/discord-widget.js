/*
=============================================================================
CUSTOMIZATION CHECKLIST - discord-widget.js
=============================================================================
REQUIRED CHANGES:
☐ Line 22: Replace 'https://discord.gg/AEJvSEWcZk' with your Discord invite URL

NO OTHER CHANGES NEEDED:
✓ Simple click handler for Discord floating button
✓ Opens Discord in new tab when clicked
=============================================================================
*/

// Discord Direct Link Handler
document.addEventListener('DOMContentLoaded', function() {
  const discordBtn = document.getElementById('discordFloatingBtn');
  
  if (discordBtn) {
    // Direct redirect to Discord server
    discordBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.open('https://discord.gg/AEJvSEWcZk', '_blank');
    });
  }
});


