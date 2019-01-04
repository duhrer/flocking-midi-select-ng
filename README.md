# flocking-midi-select-ng

This package provides a light overlay for the MIDI device selector components and UI elements provided by Flocking.  It
adds a few key pieces of functionality:

1. MIDI devices will now be added and removed automatically as they are connected or disconnected.
2. The first option in each list of devices is now always "None".
3. It's now possible to configure a "preferred device", which will be chosen automatically if the user has not
   explicitly made their own choice.
