<template>
    <div class="container">
      <nav class="navigation">
        <div class="navi-logo">
          <div v-if="show" v-on:click="show = !show" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Menu/Close.svg') + ')' }" class="navi-circle-close"></div>
          <div v-if="show" v-on:click="show = !show" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Menu/Close.svg') + ')' }" class="navi-circle-open"></div>
          <div v-if="!show" v-bind:class="{'navi-circle-open-menu': !show}" v-on:click="show = !show" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Menu/Close.svg') + ')' }" class="navi-circle-open"></div>
          <img class="logo" src="@/assets/logo.png">
          <img class="logo-small" src="@/assets/logo-min.png">
        </div>
        <div class="navi-head">
          <div class="head-title">
            Alert
          </div>
        </div>
        <div class="navi-user">
          <div v-if="popup" class="user-menu">
            <div v-on:click="popup = !popup" class="username">
              Andrew Turner
            </div>
            <div v-on:click="popup = !popup" class="user-circle"><span id="avatar">A</span></div>
            <img class="popup-image-box" src="@/assets/Icon/Users.svg">
            <span id="popup-link">Profile</span>
            <img class="popup-image-box" src="@/assets/Icon/Settings.svg">
            <span id="popup-link">Settings</span>
            <div class="popup-title">
              Switch to
            </div>
            <img class="popup-image-box" src="@/assets/Icon/Dashboard.svg">
            <span id="popup-link">System Admin</span>
            <img class="popup-image-box" src="@/assets/Icon/Reseller.svg">
            <span id="popup-link">Reseller Portal</span>
            <div class="popup-image-box">
              <svg class="svg-blue" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M24.3729268,11.5098362 C24.6872358,11.5098362 24.9420325,11.7664181 24.9420325,12.0830302 C24.9420325,12.3996422 24.6872358,12.656306 24.3729268,12.656306 L23.8378862,12.656306 L23.8378862,24.3593233 C23.8378862,24.6759353 23.5830894,24.9325991 23.2687805,24.9325991 L6.67325203,24.9325991 C6.35894309,24.9325991 6.10414634,24.6759353 6.10414634,24.3593233 L6.10414634,12.656306 L5.56910569,12.656306 C5.25479675,12.656306 5,12.3996422 5,12.0830302 C5,11.7664181 5.25479675,11.5097543 5.56910569,11.5097543 L9.78341463,11.5097543 L9.78341463,6.58220259 C9.78341463,6.26559052 10.0382114,6.00892672 10.3525203,6.00892672 L19.5895122,6.00892672 C19.9038211,6.00892672 20.1586179,6.26559052 20.1586179,6.58220259 L20.1586179,11.5098362 L24.3729268,11.5098362 Z M17.7754472,23.7861293 L17.7754472,22.8598793 L15.5401626,22.8598793 L15.5401626,23.7212672 C15.5401626,23.7432155 15.5386179,23.7648362 15.5362602,23.7861293 L17.7754472,23.7861293 Z M14.4057724,23.7861293 C14.4034146,23.7647543 14.4019512,23.7432155 14.4018699,23.7212672 L14.4018699,22.8598793 L12.1665854,22.8598793 L12.1665854,23.7861293 L14.4057724,23.7861293 Z M18.9136585,23.7861293 L22.6996748,23.7861293 L22.6996748,12.6563879 L7.24235772,12.6563879 L7.24235772,23.7861293 L11.028374,23.7861293 L11.028374,22.2866034 C11.028374,21.9699914 11.2831707,21.7133276 11.5974797,21.7133276 L18.3445528,21.7133276 C18.6588618,21.7133276 18.9136585,21.9699914 18.9136585,22.2866034 L18.9136585,23.7861293 Z M10.921626,7.15547845 L10.921626,11.5097543 L19.0204065,11.5097543 L19.0204065,7.15547845 L10.921626,7.15547845 Z M9.39243902,17.497375 C9.70682927,17.497375 9.96154472,17.7540388 9.96154472,18.0706509 L9.96154472,19.0657759 C9.96154472,19.3823879 9.70674797,19.6390517 9.39243902,19.6390517 C9.07813008,19.6390517 8.82333333,19.3823879 8.82333333,19.0657759 L8.82333333,18.0706509 C8.82333333,17.7540388 9.07813008,17.497375 9.39243902,17.497375 Z M11.6689431,17.497375 C11.9833333,17.497375 12.2380488,17.7540388 12.2380488,18.0706509 L12.2380488,19.0657759 C12.2380488,19.3823879 11.983252,19.6390517 11.6689431,19.6390517 C11.3546341,19.6390517 11.0998374,19.3823879 11.0998374,19.0657759 L11.0998374,18.0706509 C11.0998374,17.7540388 11.3546341,17.497375 11.6689431,17.497375 Z M13.9455285,17.497375 C14.2598374,17.497375 14.5146341,17.7540388 14.5146341,18.0706509 L14.5146341,19.0657759 C14.5146341,19.3823879 14.2598374,19.6390517 13.9455285,19.6390517 C13.6312195,19.6390517 13.3764228,19.3823879 13.3764228,19.0657759 L13.3764228,18.0706509 C13.3764228,17.7540388 13.6312195,17.497375 13.9455285,17.497375 Z M15.9965041,17.497375 C16.310813,17.497375 16.5656098,17.7540388 16.5656098,18.0706509 L16.5656098,19.0657759 C16.5656098,19.3823879 16.310813,19.6390517 15.9965041,19.6390517 C15.6821951,19.6390517 15.4273984,19.3823879 15.4273984,19.0657759 L15.4273984,18.0706509 C15.4273984,17.7540388 15.6821951,17.497375 15.9965041,17.497375 Z M18.2730894,17.497375 C18.5873984,17.497375 18.8421951,17.7540388 18.8421951,18.0706509 L18.8421951,19.0657759 C18.8421951,19.3823879 18.5873984,19.6390517 18.2730894,19.6390517 C17.9587805,19.6390517 17.7039837,19.3823879 17.7039837,19.0657759 L17.7039837,18.0706509 C17.7039837,17.7540388 17.9587805,17.497375 18.2730894,17.497375 Z M20.5495935,17.497375 C20.8639024,17.497375 21.1186992,17.7540388 21.1186992,18.0706509 L21.1186992,19.0657759 C21.1186992,19.3823879 20.8639024,19.6390517 20.5495935,19.6390517 C20.2352846,19.6390517 19.9804878,19.3823879 19.9804878,19.0657759 L19.9804878,18.0706509 C19.9804878,17.7540388 20.2352846,17.497375 20.5495935,17.497375 Z M9.39243902,14.2972672 C9.70682927,14.2972672 9.96154472,14.553931 9.96154472,14.8705431 L9.96154472,15.8656681 C9.96154472,16.1822802 9.70674797,16.438944 9.39243902,16.438944 C9.07813008,16.438944 8.82333333,16.1822802 8.82333333,15.8656681 L8.82333333,14.8705431 C8.82333333,14.553931 9.07813008,14.2972672 9.39243902,14.2972672 Z M11.6689431,14.2972672 C11.9833333,14.2972672 12.2380488,14.553931 12.2380488,14.8705431 L12.2380488,15.8656681 C12.2380488,16.1822802 11.983252,16.438944 11.6689431,16.438944 C11.3546341,16.438944 11.0998374,16.1822802 11.0998374,15.8656681 L11.0998374,14.8705431 C11.0998374,14.553931 11.3546341,14.2972672 11.6689431,14.2972672 Z M13.9455285,14.2972672 C14.2598374,14.2972672 14.5146341,14.553931 14.5146341,14.8705431 L14.5146341,15.8656681 C14.5146341,16.1822802 14.2598374,16.438944 13.9455285,16.438944 C13.6312195,16.438944 13.3764228,16.1822802 13.3764228,15.8656681 L13.3764228,14.8705431 C13.3764228,14.553931 13.6312195,14.2972672 13.9455285,14.2972672 Z M15.9965041,14.2972672 C16.310813,14.2972672 16.5656098,14.553931 16.5656098,14.8705431 L16.5656098,15.8656681 C16.5656098,16.1822802 16.310813,16.438944 15.9965041,16.438944 C15.6821951,16.438944 15.4273984,16.1822802 15.4273984,15.8656681 L15.4273984,14.8705431 C15.4273984,14.553931 15.6821951,14.2972672 15.9965041,14.2972672 Z M18.2730894,14.2972672 C18.5873984,14.2972672 18.8421951,14.553931 18.8421951,14.8705431 L18.8421951,15.8656681 C18.8421951,16.1822802 18.5873984,16.438944 18.2730894,16.438944 C17.9587805,16.438944 17.7039837,16.1822802 17.7039837,15.8656681 L17.7039837,14.8705431 C17.7039837,14.553931 17.9587805,14.2972672 18.2730894,14.2972672 Z M20.5495935,14.2972672 C20.8639024,14.2972672 21.1186992,14.553931 21.1186992,14.8705431 L21.1186992,15.8656681 C21.1186992,16.1822802 20.8639024,16.438944 20.5495935,16.438944 C20.2352846,16.438944 19.9804878,16.1822802 19.9804878,15.8656681 L19.9804878,14.8705431 C19.9804878,14.553931 20.2352846,14.2972672 20.5495935,14.2972672 Z M12.6944715,8.44166379 C13.0087805,8.44166379 13.2635772,8.69832759 13.2635772,9.01493966 L13.2635772,10.0100647 C13.2635772,10.3266767 13.0087805,10.5833405 12.6944715,10.5833405 C12.3801626,10.5833405 12.1253659,10.3266767 12.1253659,10.0100647 L12.1253659,9.01493966 C12.1253659,8.69832759 12.3801626,8.44166379 12.6944715,8.44166379 Z M14.9710569,8.44166379 C15.2853659,8.44166379 15.5401626,8.69832759 15.5401626,9.01493966 L15.5401626,10.0100647 C15.5401626,10.3266767 15.2853659,10.5833405 14.9710569,10.5833405 C14.656748,10.5833405 14.4019512,10.3266767 14.4019512,10.0100647 L14.4019512,9.01493966 C14.4019512,8.69832759 14.656748,8.44166379 14.9710569,8.44166379 Z M17.2476423,8.44166379 C17.5619512,8.44166379 17.816748,8.69832759 17.816748,9.01493966 L17.816748,10.0100647 C17.816748,10.3266767 17.5619512,10.5833405 17.2476423,10.5833405 C16.9333333,10.5833405 16.6785366,10.3266767 16.6785366,10.0100647 L16.6785366,9.01493966 C16.6785366,8.69832759 16.9333333,8.44166379 17.2476423,8.44166379 Z" id="path-1">
                </path>
              </svg>
            </div>
            <span id="popup-link-active">Appolo Inc.</span>
            <div class="popup-logout">
              <img class="popup-image-box" src="@/assets/Icon/Arrow/Right.svg">
              <span id="popup-link">Log out</span>
            </div>
          </div>
          <div v-on:click="popup = !popup" class="username">
            Andrew Turner
          </div>
          <div v-on:click="popup = !popup" class="user-circle"><span id="avatar">A</span></div>
        </div>
      </nav>
      <transition name="fade">
      <ul v-bind:class="{'sidebar-hide': !show}" >
        <li id="active">
          <router-link :to="{ name: 'Alert'}">
            <div class="image-box">
              <svg class="svg-active" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M19.8262299,7.70449973 C19.8262299,7.00926901 19.530506,6.25481123 19.0728188,5.7824317 C18.8866147,5.59019366 18.9031334,5.29387093 19.1097507,5.12062554 C19.316368,4.94744261 19.6348554,4.96281166 19.8210595,5.15498723 C20.4455446,5.79967502 20.8334641,6.77660912 20.8334641,7.7045622 C20.8334641,8.64119941 20.4384269,9.62550566 19.8025264,10.2733797 C19.7032131,10.374528 19.5671022,10.4259456 19.4305212,10.4259456 C19.3091831,10.4259456 19.1876435,10.3854613 19.0910161,10.3033681 C18.8856747,10.1288732 18.8712376,9.83248799 19.0587846,9.64137452 C19.5249998,9.166371 19.8262299,8.40610297 19.8262299,7.70449973 Z M17.5635119,9.49955445 C17.3581705,9.32499706 17.3438677,9.02861186 17.531549,8.83749838 C17.7713379,8.59340543 17.9521029,8.10771855 17.9521029,7.70774847 C17.9521029,7.31121456 17.7746282,6.82890137 17.5392712,6.5858705 C17.3530671,6.39363246 17.3696529,6.09737221 17.5762702,5.92412682 C17.7828204,5.75081894 18.1013078,5.76625047 18.2875119,5.95855098 C18.7515782,6.43774038 18.9592699,7.18238945 18.9592699,7.70774847 C18.9592699,8.23804307 18.7476836,8.98843992 18.2750222,9.46969102 C18.1756417,9.57090181 18.039598,9.62219445 17.9030842,9.62219445 C17.7818132,9.62219445 17.6600721,9.58171013 17.5635119,9.49955445 Z M10.4821857,10.4259456 C10.3445303,10.4259456 10.2074122,10.3737783 10.1079646,10.2710681 C9.48341227,9.62625537 9.09549281,8.64938374 9.09549281,7.72143067 C9.09549281,6.78479345 9.49053006,5.80048721 10.1264306,5.15261315 C10.3139776,4.96149967 10.6325322,4.94806737 10.8379408,5.12256229 C11.0432823,5.2970572 11.0577193,5.5934424 10.8701723,5.78455588 C10.4039572,6.25962187 10.102727,7.0198899 10.102727,7.72143067 C10.102727,8.41659891 10.3984509,9.17118164 10.8561381,9.64368612 C11.0423422,9.83592416 11.0258235,10.1321844 10.8192062,10.3054298 C10.7229146,10.3861485 10.6023151,10.4259456 10.4821857,10.4259456 Z M11.6416465,9.46744189 C11.177513,8.98825249 10.9698213,8.24360342 10.9698213,7.71830688 C10.9698213,7.18801228 11.1814076,6.43755295 11.6542034,5.95630185 C11.8418847,5.76531333 12.1604392,5.75206846 12.3657136,5.92656337 C12.5709879,6.10118324 12.5852906,6.39750596 12.3976765,6.58855696 C12.1578876,6.83258744 11.9770555,7.31827432 11.9770555,7.7182444 C11.9770555,8.11477831 12.1545301,8.5970915 12.3898872,8.84012237 C12.5760912,9.03236041 12.5595054,9.32862066 12.3528881,9.50186605 C12.2566637,9.58258479 12.1360642,9.6223194 12.0159347,9.6223194 C11.8782122,9.6223194 11.7410941,9.5701521 11.6416465,9.46744189 Z M20.9752155,24.3865383 C21.0611662,24.6326305 20.9163931,24.8969656 20.6518934,24.9769346 C20.6001215,24.9925536 20.5476782,24.9999882 20.4961078,24.9999882 C20.28385,24.9999882 20.0864321,24.8740994 20.0172687,24.6761136 L19.2439143,22.4620962 C18.1958536,21.6787746 16.6596871,21.2306981 14.9998995,21.2306981 C13.3393061,21.2306981 11.8032069,21.6788371 10.7560191,22.4622836 L9.98266467,24.6761136 C9.89671402,24.9222683 9.61267399,25.0569036 9.34804,24.9769346 C9.08360745,24.8969656 8.93883433,24.632568 9.02478498,24.3864758 L9.83312397,22.0724971 C9.83876448,22.0517551 9.84581512,22.0313255 9.85447734,22.0113957 L14.2938284,9.30275567 C13.664307,9.04810431 13.2228027,8.46408052 13.2228027,7.78578074 C13.2228027,6.87407137 14.019995,6.13235866 14.9998995,6.13235866 C15.9797369,6.13235866 16.7769292,6.87407137 16.7769292,7.78578074 C16.7769292,8.46395557 16.3356263,9.04785441 15.7063064,9.30256825 L20.1459261,22.0123954 C20.1540511,22.0312631 20.1606988,22.0505056 20.1660707,22.0700605 L20.9752155,24.3865383 Z M17.0404217,16.153977 L15.000101,10.3129269 L12.959646,16.1540395 C13.6103193,16.0036602 14.3018191,15.9253156 15.0004367,15.9253156 C15.6986514,15.9253156 16.3898827,16.0035977 17.0404217,16.153977 Z M14.9998995,7.06949568 C14.5753839,7.06949568 14.2300369,7.39080873 14.2300369,7.78578074 C14.2300369,8.18075276 14.5753839,8.50206581 14.9998995,8.50206581 C15.424348,8.50206581 15.769695,8.18075276 15.769695,7.78578074 C15.769695,7.39080873 15.424348,7.06949568 14.9998995,7.06949568 Z M14.9998995,20.2936236 C16.3700737,20.2936236 17.6761207,20.5702664 18.7583603,21.0721346 L17.4194775,17.2392441 C16.6803019,16.9934643 15.8486622,16.8624526 15.0004367,16.8624526 C14.1517412,16.8624526 13.3198329,16.9934019 12.5805902,17.2393066 L11.2417745,21.0718846 C12.3236112,20.570204 13.6294567,20.2936236 14.9998995,20.2936236 Z" id="path-1">
                </path>
              </svg>
            </div>
            <span v-if="show" class="side-link" id="active">Alert</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'SMSCenter'}">
            <img class="image-box" src="@/assets/Icon/Vendors.svg">
            <span v-if="show" class="side-link">SMS Center</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'CompanyTemplate'}">
            <img class="image-box" src="@/assets/Icon/Template.svg">
            <span v-if="show" class="side-link">Templates</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'CompanyBilling'}">
            <img class="image-box" src="@/assets/Icon/Billing.svg">
            <span v-if="show" class="side-link">Billing</span>
          </router-link>
        </li>
        <div v-if="show" class="side-title">
          Manage
        </div>
        <li>
          <router-link :to="{ name: 'CompanyDIDs'}">
            <img class="image-box" src="@/assets/Icon/DID.svg">
            <span v-if="show" class="side-link">DIDs</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'CompanySMSWorkflow'}">
            <img class="image-box" src="@/assets/Icon/SMS Flow.svg">
            <span v-if="show" class="side-link">SMS Workflow</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'CompanyReminderWorkflow'}">
            <img class="image-box" src="@/assets/Icon/Alerts.svg">
            <span v-if="show" class="side-link">Reminder Workflow</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'CompanyCampaigns'}">
            <img class="image-box" src="@/assets/Icon/Reseller.svg">
            <span v-if="show" class="side-link">Campaigns</span>
          </router-link>
        </li>
      </ul>
      </transition>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            Alert
          </div>
        </div>
        <div class="navbar-profile">
          <div class="nav-link-profile">
            <div id="active" class="nav-text-profile">
              Daily Usage
              <div class="nav-line-profile"></div>
            </div>
          </div>
          <div class="nav-link-profile">
            <router-link :to="{ name: 'AlertWeekly' }">
              <div class="nav-text-profile">
                Weekly Usage
              </div>
            </router-link>
          </div>
        </div>
        <div class="cont-1-alert">
            <div class="chart-1-alert">
              <alert-daily-line :options="{responsive: false, maintainAspectRatio: false}" :width="1000" :height="280"></alert-daily-line>
              <input class="alert-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.search" placeholder="Search">
              <button class="alert-filter" type="submit">Filter</button>
              <table class="alert-table" cellspacing="0" cellpadding="0">
                <thead>
                  <tr>
                    <th class="company">Company</th>
                    <th class="date">Date</th>
                    <th class="sms">SMS</th>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="sms">97322</td>
                  </tr>
                  <tr>
                    <td class="company">Lou Haynes</td>
                    <td class="date">06 Nov 2018</td>
                    <td class="sms">86906</td>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="sms">49288</td>
                  </tr>
                  <tr>
                    <td class="company">Littelfort</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="sms">18248</td>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="sms">97322</td>
                  </tr>
                  <tr>
                    <td class="company">Lou Haynes</td>
                    <td class="date">06 Nov 2018</td>
                    <td class="sms">86906</td>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="sms">49288</td>
                  </tr>
                  <tr>
                    <td class="company">Littelfort</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="sms">18248</td>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="sms">97322</td>
                  </tr>
                  <tr>
                    <td class="company">Lou Haynes</td>
                    <td class="date">06 Nov 2018</td>
                    <td class="sms">86906</td>
                  </tr>
                  <tr>
                    <td class="company">Lou Haynes</td>
                    <td class="date">06 Nov 2018</td>
                    <td class="sms">86906</td>
                  </tr>
                </thead>
              </table>
              <div class="show-more">
                <a href="#" id="show-more">Show more</a>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import AlertDailyLine from '@/components/cadmin/AlertDailyLine'

export default {
    name: 'app',
    data () {
        return {
          show: true,
          width: '60px',
          transitionName: 'fade',
          popup: false,
          test: false,
          isModalVisible: false,
                user:{
                system: 'Overall system',
                days: 'Last 30 days'
            },

        }
    },
    components:{
      AlertDailyLine,
    },
    methods:{
        sendForm(){
            event.preventDefault()
        },
        showModal() {
          this.isModalVisible = true;
        },
        closeModal() {
          this.isModalVisible = false;
        }
    },
}
</script>
<style>
button{
    border: 1px
    solid #BDBFD8;
    border-radius: 4px;
    background-color: #FFFFFF;
    font-family: "Helvetica Neue";
    font-size: 15px;
    font-weight: 300;
    line-height: 30px;
    text-align: center;
}
.alert-filter{
  height: 36px;
  width: 80px;
  margin-right: 15px;
  float: right;
}
.cont-1-alert{
  width: calc(100% - 40px);
  float: left;
}
.chart-1-alert{
  width: 100%;
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
  margin-left: 20px;
}
.chart-1-title-alert{
  height: 30px;
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 10px;
}
input[type="text"]{
  border: 1px solid #EDEEF3;
  border-radius: 4px;
  background-color: #FFFFFF;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-repeat: no-repeat;
  background-position-x: 5px;
  background-position-y: 5px;
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
}
.alert-search{
  height: 36px !important;
  max-width: calc(37.9090909091% - 43px);
  margin-left: 13px;
  padding-left: 40px;
  width: 100%;
}
.alert-table{
  margin-left: 20px;
  border: none;
  max-width: calc(100% - 40px);
  width: 100%;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
.company{
  width: 174px;
  padding-left: 15px;
  height: 37px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}
.date{
  width: 170px;
  height: 37px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}
.sms{
  width: 701px;
  height: 37px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}
.show-more{
  text-align: center;
  margin-top: 5px;
  margin-bottom: 23px;
}
a#show-more{
  	height: 15px;
    width: 69px;
    color: #51A3F3;
    font-family: "SF Pro Text";
    font-size: 13px;
    line-height: 15px;
    text-decoration: none;
}
.svg-blue path{
  fill: #51A3F3;
}
a{
  text-decoration: none;
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
}
.navbar-profile{
  height: 50px;
  width: 100%;
  background-color: #FFFFFF;
  box-shadow: inset 0 1px 0 0 #F8F9FE;
}
.profile-main{
  float: left;
  display: inline-block;
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-right: 20px;
}
.nav-text-profile{
  color: #BDBFD8;
  font-family: "Circular Std";
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  text-align: center;
  margin-top: 15px;
}
.nav-text-profile#active{
  color: #51A3F3;
  font-weight: 500;
}
a{
  text-decoration: none;
}
.nav-link-profile{
  display: inline-block;
  float: left;
  height: 50px;
  width: 120px;
  margin-left: 20px;
}
.nav-line-profile{
  border-bottom: 2px solid #51A3F3;
  width: 125px;
  margin-top: 13px;
}
.side a{
  text-decoration: none;
  color: #55616E;
}
.side#active a{
  text-decoration: none;
  color: #FFFFFF;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.col-md-6{
  width: 45.83%;
}
.col-md-3{
  width: 20.8%;
}
button#payment{
  	height: 40px;
    width: auto;
    border-radius: 4px;
    background-color: #51A3F3;
    border-radius: 4px;
    color: #fff;
    font-family: "Helvetica Neue";
    font-size: 15px;
    font-weight: 300;
    line-height: 30px;
    text-align: center;
    margin-top: 20px;
    float: right;
    padding-left: 15px;
    padding-right: 15px;
}
.main{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
.side#active svg g{
  fill: white;
}
#avatar{
  	font-family: "Helvetica Neue";
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 15px;
    text-align: center;
    margin-left: 11px;
    margin-top: 7px;
    display: inline-block;
}
.side-link{
  	height: 20px;
    width: 220px;
    font-family: "Helvetica Neue";
    font-size: 16px;
    line-height: 20px;
    display: inline-block;
    margin-top: 10px;
}
.side-link#active{
  	color: #FFFFFF;
}
ul{
	height: 100vh;
	max-width: 300px;
  width: 100%;
	background-color: #F0F1FA;
  display: inline-block;
  float: left;
  margin: 0;
  padding: 0;
}
li a{
  text-decoration: none;
  color: #55616E;
  cursor: pointer;
}
.sidebar-hide {
	height: 100vh;
	width: 60px;
	background-color: #F0F1FA;
  display: inline-block;
  float: left;
  margin-right: 75px;
}
li{
  height: 40px;
  width: 100%;
  color: #55616E;
  display: inline-block;
  cursor: pointer;
}
.side-hide{
  height: 40px;
  width: 60px;
  color: #55616E;
  display: inline-block;
}
.side-hide#active{
	border-radius: 0 4px 4px 0;
	background: linear-gradient(135deg, #51A3F3 0%, #51B5F3 100%);
  color: #FFFFFF;
  fill: #FFFFFF;
}
li#active{
	border-radius: 0 4px 4px 0;
	background: linear-gradient(135deg, #51A3F3 0%, #51B5F3 100%);
  color: #FFFFFF;
  fill: #FFFFFF;
}
li:first-child{
  margin-top: 10px;
}
.billing-control-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
}
.image-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 5px;
  margin-left: 15px;
  margin-right: 10px;
}
.side-title{
  	height: 30px;
    width: 270px;
    color: #BDBFD8;
    font-family: "Circular Std";
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 30px;
    display: inline-block;
    text-transform: uppercase;
    margin-left: 15px;
    margin-top: 21px;
}


.user-menu{
	height: auto;
	width: 228px;
	background-color: #FFFFFF;
	box-shadow: 0 10px 40px 0 rgba(0,0,0,0.1);
  vertical-align: top;
  position: fixed;
  z-index: 999999;
  float: right;
}
.navigation{
  max-width: 100%;
  height: 60px;
  background-color: #FFFFFF;
}
.navi-logo{
  max-width: 300px;
  display: inline-block;
  width: 100%;
}
.navi-circle-open{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: none;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
  margin-right: 10px;
  transform: rotate(180deg);
}
.navi-circle-open-menu{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
  margin-right: 10px;
  transform: rotate(180deg);
}
.navi-circle-close{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
  margin-right: 10px;
}
.user-circle{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 10px;
  margin-bottom: 15px;
  margin-right: 15px;
  float: left;
}
.username{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 15px;
  line-height: 20px;
  text-align: left;
  margin-top: 20px;
  float: left;
  margin-left: 50px;
}
.navi-head{
  max-width: 560px;
  display: inline-block;
  width: auto;
}
.navi-user{
  max-width: 228px;
  float: right;
  display: inline-block;
  width: auto;
}
.popup-logout{
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-bottom: 15px;
}
#popup-link{
  	height: 20px;
    width: 158px;
    font-family: "Helvetica Neue";
    font-size: 16px;
    line-height: 20px;
    display: inline-block;
    margin-top: 15px;
    cursor: pointer;
}
#popup-link-active{
  	height: 20px;
    width: 158px;
    font-family: "Helvetica Neue";
    font-size: 16px;
    line-height: 20px;
    display: inline-block;
    margin-top: 15px;
    color: #51A3F3;
}
.popup-image-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 10px;
}
.popup-title{
  	height: 30px;
    width: 198px;
    color: #BDBFD8;
    font-family: "Circular Std";
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 30px;
    display: inline-block;
    text-transform: uppercase;
    margin-left: 15px;
    margin-top: 21px;
}
.head-title{
    display: inline-block;
    vertical-align: top;
    vertical-align: top;
    color: #55616E;
    font-family: "Circular Std";
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    margin-left: 15px;
    margin-top: 15px;
    margin-right: 32px;
}
.logo{
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-right: 20px;
}
.logo-small{
  display: none;
  vertical-align: top;
  margin-top: 15px;
  margin-right: 20px;
}
.res-div{
  display: none;
  width: 100%;
}
.res-select{
  display: inline-block;
  width: calc(100% - 15px);
  margin-left: 15px;
}
@media only screen and (max-width: 1200px) {
    .navi-head{
      display: none;
    }
    .navi-logo{
      max-width: 40.8333333333%;
      width: 100%;
    }
    .res-div{
      display: inline-block;
    }
}
@media only screen and (max-width: 750px) {
    .logo{
      display: none;
    }
    .logo-small{
      display: inline-block;
    }
    .navi-logo{
      max-width: 38.8333333333%;
      width: 100%;
    }
    .navi-circle-open{
      display: inline-block;
    }
    .navi-circle-close{
      display: none;
    }
    ul, .sidebar-hide{
      display: none;
    }
    .main{
      max-width: 100%;
    }
}
@media only screen and (max-width: 390px) {
    .username{
      display: none;
    }
}
</style>
