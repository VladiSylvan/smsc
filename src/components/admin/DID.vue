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
            DID
          </div>
        </div>
        <div class="navi-user">
          <div v-if="popup" class="user-menu">
            <div v-on:click="popup = !popup" class="username">
              Linnie Weaver
            </div>
            <div v-on:click="popup = !popup" class="user-circle"><span id="avatar">A</span></div>
            <img class="popup-image-box" src="@/assets/Icon/Users.svg">
            <span id="popup-link">Profile</span>
            <img class="popup-image-box" src="@/assets/Icon/Settings.svg">
            <span id="popup-link">Settings</span>
            <div class="popup-title">
              Switch to
            </div>
            <div class="popup-image-box">
              <svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <title>Icon / Dashboard</title>
                  <desc>Created with Sketch.</desc>
                  <defs>
                      <path d="M24.7133515,13.5075766 L15.4490463,5.20674095 C15.1919891,4.97649025 14.8079564,4.97649025 14.5509537,5.20674095 L5.2866485,13.5075766 C5.00376022,13.7610585 4.97542234,14.2010585 5.22337875,14.4903621 C5.47133515,14.7794986 5.90179837,14.8085237 6.18468665,14.5549861 L6.90201635,13.912312 L6.90201635,24.2696379 C6.90201635,24.6542061 7.20697548,24.9660167 7.58321526,24.9660167 L12.7457766,24.9660167 L17.2542234,24.9660167 L22.4167302,24.9660167 C22.79297,24.9660167 23.0979292,24.6542061 23.0979292,24.2696379 L23.0979292,13.9123677 L23.8152589,14.5550975 C23.9445777,14.6708635 24.1046866,14.7277994 24.2639782,14.7277994 C24.453406,14.7277994 24.6418529,14.6475209 24.7765123,14.4904178 C25.0246322,14.2010585 24.9962943,13.7611142 24.7133515,13.5075766 Z M13.4269755,23.5733148 L13.4269755,17.8366574 L16.57297,17.8366574 L16.57297,23.5733148 L13.4269755,23.5733148 Z M21.7356403,12.6969916 L21.7356403,23.5732591 L17.9355313,23.5732591 L17.9355313,17.1402786 C17.9355313,16.7557103 17.6304632,16.4438997 17.2543324,16.4438997 L12.7458856,16.4438997 C12.3697003,16.4438997 12.0646866,16.7557103 12.0646866,17.1402786 L12.0646866,23.5733148 L8.26446866,23.5733148 L8.26446866,12.6969916 C8.26446866,12.6952089 8.26425068,12.6935376 8.26425068,12.6918106 L15,6.65643454 L21.7358583,12.6917549 C21.7359128,12.6935933 21.7356403,12.6952089 21.7356403,12.6969916 Z M13.4741144,11.5592201 C13.4741144,11.943844 13.7790736,12.2555989 14.1553134,12.2555989 L15.8446866,12.2555989 C16.2208719,12.2555989 16.5258856,11.943844 16.5258856,11.5592201 C16.5258856,11.1745961 16.2208719,10.8628412 15.8446866,10.8628412 L14.1553134,10.8628412 C13.7791281,10.8628412 13.4741144,11.1745961 13.4741144,11.5592201 Z" id="path-1"></path>
                  </defs>
                  <g id="Icon-/-Dashboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <mask id="mask-2" fill="white">
                          <use xlink:href="#path-1"></use>
                      </mask>
                      <g id="Combined-Shape" fill-rule="nonzero"></g>
                      <g id="Color-/-Dark-4" mask="url(#mask-2)" fill="#51A3F3">
                          <rect id="Rectangle" x="0" y="0" width="30" height="30"></rect>
                      </g>
                  </g>
              </svg>
          </div>
            <span id="popup-link-active">System Admin</span>
            <img class="popup-image-box" src="@/assets/Icon/Reseller.svg">
            <span id="popup-link">Reseller Portal</span>
            <img class="popup-image-box" src="@/assets/Icon/Companies.svg">
            <span id="popup-link">Appolo Inc.</span>
            <div class="popup-logout">
              <img class="popup-image-box" src="@/assets/Icon/Arrow/Right.svg">
              <span id="popup-link">Log out</span>
            </div>
          </div>
          <div v-on:click="popup = !popup" class="username">
            Linnie Weaver
          </div>
          <div v-on:click="popup = !popup" class="user-circle"><span id="avatar">A</span></div>
        </div>
      </nav>
      <transition name="fade">
      <ul v-bind:class="{'sidebar-hide': !show}">
        <li>
          <router-link :to="{ name: 'Dashboard'}">
            <img class="image-box" src="@/assets/Icon/Dashboard.svg">
            <span v-if="show" class="side-link">Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Reporting'}">
            <img class="image-box" src="@/assets/Icon/Reporting.svg">
            <span v-if="show" class="side-link">Reporting</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Product'}">
            <img class="image-box" src="@/assets/Icon/Product.svg">
            <span v-if="show" class="side-link">Product</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Template'}">
            <img class="image-box" src="@/assets/Icon/Template.svg">
            <span v-if="show" class="side-link">Template Approval</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Billing'}">
            <img class="image-box" src="@/assets/Icon/Billing.svg">
            <span v-if="show" class="side-link">Billing</span>
          </router-link>
        </li>
        <div v-if="show" class="side-title">
          Manage
        </div>
        <li>
          <router-link :to="{ name: 'Resellers'}">
            <img class="image-box" src="@/assets/Icon/Reseller.svg">
            <span v-if="show" class="side-link">Resellers</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Users'}">
            <img class="image-box" src="@/assets/Icon/Users.svg">
            <span v-if="show" class="side-link">Users</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Companies'}">
            <img class="image-box" src="@/assets/Icon/Companies.svg">
            <span v-if="show" class="side-link">Companies</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Vendors'}">
            <img class="image-box" src="@/assets/Icon/Vendors.svg">
            <span v-if="show" class="side-link">Vendors</span>
          </router-link>
        </li>
        <li id="active">
          <router-link :to="{ name: 'DID'}">
            <div class="image-box">
              <svg class="svg-active" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M22.8623041,6.4771831 L13.5686636,6.4771831 C13.5290323,6.12976526 13.382765,5.80741784 13.1409217,5.55164319 C12.8413825,5.23474178 12.4369585,5.06028169 12.0023041,5.06028169 L6.67198157,5.06028169 C6.23723502,5.06028169 5.83290323,5.23474178 5.53336406,5.5515493 C5.23382488,5.8684507 5.07788018,6.28666667 5.09410138,6.72929577 L5.36138249,13.9882629 C5.37963134,14.4824413 5.38,15.3179343 5.36221198,15.8126761 L5.09317972,23.3000939 C5.07732719,23.7425352 5.23354839,24.1606573 5.53327189,24.4773709 C5.83290323,24.7940845 6.23732719,24.9684507 6.6718894,24.9684507 L12.0021198,24.9684507 C12.436682,24.9684507 12.841106,24.7940845 13.1407373,24.4773709 C13.3157604,24.2923944 13.4402765,24.0723005 13.5117051,23.8334272 L22.8621198,23.8334272 C24.0056221,23.8334272 24.9358525,22.8857277 24.9358525,21.7207512 L24.9358525,8.58985915 C24.9360369,7.42497653 24.0058065,6.4771831 22.8623041,6.4771831 Z M12.1457143,23.4997183 C12.1197235,23.5271362 12.0737327,23.5599061 12.0023041,23.5599061 L6.67198157,23.5599061 C6.600553,23.5599061 6.55456221,23.5271362 6.52857143,23.4997183 C6.50258065,23.4723005 6.4721659,23.4243192 6.47483871,23.3515493 L6.74387097,15.8641315 C6.76294931,15.3320188 6.76258065,14.4667606 6.74294931,13.9353052 L6.4756682,6.67643192 C6.47299539,6.60384977 6.50322581,6.55596244 6.52912442,6.5286385 C6.55493088,6.50131455 6.60073733,6.46873239 6.67198157,6.46873239 L12.002212,6.46873239 C12.0734562,6.46873239 12.1192627,6.50131455 12.1451613,6.5286385 C12.1709677,6.55605634 12.2011982,6.60384977 12.1986175,6.67643192 L11.9313364,13.9353991 C11.9117972,14.4675117 11.9113364,15.3326761 11.9304147,15.8642254 L12.1993548,23.3516432 C12.2020276,23.4243192 12.1716129,23.4723005 12.1457143,23.4997183 Z M23.5535484,21.7207512 C23.5535484,22.109108 23.2435023,22.4249765 22.8623041,22.4249765 L13.5495853,22.4249765 L13.3120737,15.81277 C13.2942857,15.3185915 13.2947465,14.4830986 13.3129032,13.9882629 L13.5376037,7.8857277 L22.8623963,7.8857277 C23.2435945,7.8857277 23.5536406,8.20159624 23.5536406,8.58995305 L23.5536406,21.7207512 L23.5535484,21.7207512 Z M21.9180645,9.61521127 L14.6610138,9.61521127 C14.2792627,9.61521127 13.9697696,9.93051643 13.9697696,10.3194366 C13.9697696,10.7083568 14.2792627,11.023662 14.6610138,11.023662 L21.9180645,11.023662 C22.2998157,11.023662 22.6093088,10.7083568 22.6093088,10.3194366 C22.6093088,9.93051643 22.2998157,9.61521127 21.9180645,9.61521127 Z M15.6228571,13.0598122 L14.8454378,13.0598122 C14.4636866,13.0598122 14.1541935,13.3751174 14.1541935,13.7640376 C14.1541935,14.1529577 14.4636866,14.4682629 14.8454378,14.4682629 L15.6228571,14.4682629 C16.0046083,14.4682629 16.3141014,14.1529577 16.3141014,13.7640376 C16.3141014,13.3751174 16.0046083,13.0598122 15.6228571,13.0598122 Z M18.6320737,13.0598122 L17.8546544,13.0598122 C17.4729032,13.0598122 17.1634101,13.3751174 17.1634101,13.7640376 C17.1634101,14.1529577 17.4729032,14.4682629 17.8546544,14.4682629 L18.6320737,14.4682629 C19.0138249,14.4682629 19.323318,14.1529577 19.323318,13.7640376 C19.323318,13.3751174 19.0139171,13.0598122 18.6320737,13.0598122 Z M21.6413825,13.0598122 L20.8639631,13.0598122 C20.482212,13.0598122 20.1727189,13.3751174 20.1727189,13.7640376 C20.1727189,14.1529577 20.482212,14.4682629 20.8639631,14.4682629 L21.6413825,14.4682629 C22.0231336,14.4682629 22.3326267,14.1529577 22.3326267,13.7640376 C22.3326267,13.3751174 22.0231336,13.0598122 21.6413825,13.0598122 Z M15.6228571,15.7551174 L14.8454378,15.7551174 C14.4636866,15.7551174 14.1541935,16.0704225 14.1541935,16.4593427 C14.1541935,16.8482629 14.4636866,17.1635681 14.8454378,17.1635681 L15.6228571,17.1635681 C16.0046083,17.1635681 16.3141014,16.8482629 16.3141014,16.4593427 C16.3141014,16.0704225 16.0046083,15.7551174 15.6228571,15.7551174 Z M18.6320737,15.7551174 L17.8546544,15.7551174 C17.4729032,15.7551174 17.1634101,16.0704225 17.1634101,16.4593427 C17.1634101,16.8482629 17.4729032,17.1635681 17.8546544,17.1635681 L18.6320737,17.1635681 C19.0138249,17.1635681 19.323318,16.8482629 19.323318,16.4593427 C19.323318,16.0704225 19.0139171,15.7551174 18.6320737,15.7551174 Z M21.6413825,15.7551174 L20.8639631,15.7551174 C20.482212,15.7551174 20.1727189,16.0704225 20.1727189,16.4593427 C20.1727189,16.8482629 20.482212,17.1635681 20.8639631,17.1635681 L21.6413825,17.1635681 C22.0231336,17.1635681 22.3326267,16.8482629 22.3326267,16.4593427 C22.3326267,16.0704225 22.0231336,15.7551174 21.6413825,15.7551174 Z M15.6228571,18.4505164 L14.8454378,18.4505164 C14.4636866,18.4505164 14.1541935,18.7658216 14.1541935,19.1547418 C14.1541935,19.543662 14.4636866,19.8589671 14.8454378,19.8589671 L15.6228571,19.8589671 C16.0046083,19.8589671 16.3141014,19.543662 16.3141014,19.1547418 C16.3141014,18.7658216 16.0046083,18.4505164 15.6228571,18.4505164 Z M18.6320737,18.4505164 L17.8546544,18.4505164 C17.4729032,18.4505164 17.1634101,18.7658216 17.1634101,19.1547418 C17.1634101,19.543662 17.4729032,19.8589671 17.8546544,19.8589671 L18.6320737,19.8589671 C19.0138249,19.8589671 19.323318,19.543662 19.323318,19.1547418 C19.323318,18.7658216 19.0139171,18.4505164 18.6320737,18.4505164 Z M21.6413825,18.4505164 L20.8639631,18.4505164 C20.482212,18.4505164 20.1727189,18.7658216 20.1727189,19.1547418 C20.1727189,19.543662 20.482212,19.8589671 20.8639631,19.8589671 L21.6413825,19.8589671 C22.0231336,19.8589671 22.3326267,19.543662 22.3326267,19.1547418 C22.3326267,18.7658216 22.0231336,18.4505164 21.6413825,18.4505164 Z" id="path-1">
                </path>
              </svg>
            </div>
            <span v-if="show" class="side-link" id="active">DID</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Filters'}">
            <img class="image-box" src="@/assets/Icon/Filters.svg">
            <span v-if="show" class="side-link">Filters</span>
          </router-link>
        </li>
      </ul>
      </transition>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            DID
          </div>
        </div>
          <input class="did-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.searchDID" placeholder="Search for DID">
          <router-link :to="{ name: 'ImportDID'}"><button id="did" type="submit">Import DID</button></router-link>
          <div class="main-container">
            <table class="did-table" cellspacing="0" cellpadding="0">
              <thead>
                <tr class="did-table-th">
                  <th class="did-active"></th>
                  <th class="did-number">Number</th>
                  <th class="did-created">Created On</th>
                  <th class="did-created-by">Created By</th>
                  <th class="did-country">Country</th>
                  <th class="did-type">Type</th>
                  <th class="did-assigned">Assigned To</th>
                  <th class="did-option"></th>
                  <th class="did-option"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="did-online">
                  <td class="did-active"><div class="product-active"></div></td>
                  <td class="did-number">050-185-4229</td>
                  <td class="did-created">10-03-2018</td>
                  <td class="did-created-by"><div class="did-avatar"></div> <div class="did-name-fix">San Marino</div></td>
                  <td class="did-country">Ethiopia</td>
                  <td class="did-type">Toll Free</td>
                  <td class="did-assigned"><div class="did-avatar"></div> <div class="did-name-fix">Appolo Inc.</div></td>
                  <td class="did-option"><div class="did-control-info"><router-link :to="{ name: 'EditDID' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="did-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr class="did-online">
                  <td class="did-active"><div class="product-active"></div></td>
                  <td class="did-number">215-054-1288</td>
                  <td class="did-created">11-28-2018</td>
                  <td class="did-created-by"><div class="did-avatar"></div> <div class="did-name-fix">Douglas Richards</div></td>
                  <td class="did-country">South Africa</td>
                  <td class="did-type">Local</td>
                  <td class="did-assigned"><div class="did-avatar"></div> <div class="did-name-fix">George Burns</div></td>
                  <td class="did-option"><div class="did-control-info"><router-link :to="{ name: 'EditDID' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="did-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr class="did-online">
                  <td class="did-active"><div class="product-active"></div></td>
                  <td class="did-number">697-431-7827</td>
                  <td class="did-created">01-26-2018</td>
                  <td class="did-created-by"><div class="did-avatar"></div> <div class="did-name-fix">Eleanor Jensen</div></td>
                  <td class="did-country">Marshall</td>
                  <td class="did-type">Toll Free</td>
                  <td class="did-assigned"><div class="did-avatar"></div> <div class="did-name-fix">Stanley Powell</div></td>
                  <td class="did-option"><div class="did-control-info"><router-link :to="{ name: 'EditDID' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="did-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr class="did-online">
                  <td class="did-active"><div class="product-active"></div></td>
                  <td class="did-number">239-429-1353</td>
                  <td class="did-created">01-24-2018</td>
                  <td class="did-created-by"><div class="did-avatar"></div> <div class="did-name-fix">Evelyn Holland</div></td>
                  <td class="did-country">Angola</td>
                  <td class="did-type">Local</td>
                  <td class="did-assigned"><div class="did-avatar"></div> <div class="did-name-fix">Allen Roberts</div></td>
                  <td class="did-option"><div class="did-control-info"><router-link :to="{ name: 'EditDID' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="did-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr class="did-offline">
                  <td class="did-active"><div class="product-not-active"></div></td>
                  <td class="did-number">625-867-0083</td>
                  <td class="did-created">12-14-2018</td>
                  <td class="did-created-by"><div class="did-avatar"></div> <div class="did-name-fix">Polly Mitchell</div></td>
                  <td class="did-country">Dominican</td>
                  <td class="did-type">Local</td>
                  <td class="did-assigned"><div class="did-avatar"></div> <div class="did-name-fix">Susie Dean</div></td>
                  <td class="did-option"><div class="did-control-info"><router-link :to="{ name: 'EditDID' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="did-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr class="did-offline">
                  <td class="did-active"><div class="product-not-active"></div></td>
                  <td class="did-number">542-961-8296</td>
                  <td class="did-created">10-03-2018</td>
                  <td class="did-created-by"><div class="did-avatar"></div> <div class="did-name-fix">Winnie Medina</div></td>
                  <td class="did-country">Isle of Man</td>
                  <td class="did-type">Local</td>
                  <td class="did-assigned"><div class="did-avatar"></div> <div class="did-name-fix">Peter Nelson</div></td>
                  <td class="did-option"><div class="did-control-info"><router-link :to="{ name: 'EditDID' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="did-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
</template>
<script>
import modal from '@/components/modal.vue'

export default {
    name: 'app',
    data () {
        return {
          show: true,
          width: '60px',
          transitionName: 'fade',
          popup: false,
          test: false,
          del: false,
          isModalVisible: false,
                user:{
                system: 'Overall system',
                days: 'Last 30 days'
            },

        }
    },
    components:{
      modal
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
.did-name-fix{
  display: inline-block;
  vertical-align: top;
  margin-top: 7px;
}
.did-avatar{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
}
.undo-title{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  display: inline-block;
  float: right;
  margin-top: 5px;
  margin-right: 30px;
}
.undo-image{
  display: inline-block;
  float: right;
  margin-right: 15px;
}
.undo-undo{
  color: #51A3F3;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  display: inline-block;
  float: right;
  margin-top: 5px;
  margin-right: 15px;
}
.svg-blue path{
  fill: #51A3F3;
}
.svg-active path{
  fill: white;
}
.did-table{
  border: none;
  max-width: calc(100% - 10px);
  width: 100%;
  margin-top: 20px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  text-align: left;
}
.did-table-th{
  height: 37px;
}
.did-online{
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
  height: 50px;
}
.did-offline{
  background-color: #F0F1FA;
  box-shadow: inset 0 -1px 0 0 rgba(189,191,216,0.36);
  height: 50px;
}
.did-active{
  width: 20px;
  padding-left: 7px;
}
.did-number{
  width: 199px;
}
.did-created{
  width: 119px;
}
.did-created-by{
  width: 223px;
}
.did-country{
  width: 116px;
}
.did-type{
  width: 118px;
}
.did-assigned{
  width: 190px;
}
.did-option{
  width: 50px;
}

.product-active{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #24E2B8;
  float: left;
  margin-left: 3px;
}
.product-not-active{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #D2305B;
  float: left;
  margin-left: 3px;
}
.did-control-info{
  width: 30px;
  height: 30px;
  float: left;
  margin-top: -10px;
}
.side a{
  text-decoration: none;
  color: #55616E;
}
.side#active a{
  text-decoration: none;
  color: #FFFFFF;
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
.did-input-search{
  width: 302px;
  height: 40px !important;
  padding-left: 40px;
  margin-left: 20px;
  margin-top: 20px;
}
button#did{
  	height: 40px;
    width: 130px;
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
    margin-right: 20px;
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
.main{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
.main-container{
  float: left;
  display: inline-block;
  width: calc(100% - 30px);
  margin-left: 20px;
  margin-right: 20px;
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
.image-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 5px;
  margin-left: 15px;
  margin-right: 10px;
}
.control-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 5px;
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
  margin-left: 63px;
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
    .did-input-search{
      max-width: calc(100% - 80px);
    }
}
@media only screen and (max-width: 990px) {
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
