//require('./icons/ab-logo.svg');
require("./scss/main.scss");

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons'
// We are only using the user-astronaut icon
library.add(faLinkedin, faGithub, faCodepen);
// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch();