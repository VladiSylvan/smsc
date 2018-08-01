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
            Companies
          </div>
        </div>
        <profile-component></profile-component>
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
        <li id="active">
          <router-link :to="{ name: 'Companies'}">
            <div class="image-box">
              <svg class="svg-active" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M24.3729268,11.5098362 C24.6872358,11.5098362 24.9420325,11.7664181 24.9420325,12.0830302 C24.9420325,12.3996422 24.6872358,12.656306 24.3729268,12.656306 L23.8378862,12.656306 L23.8378862,24.3593233 C23.8378862,24.6759353 23.5830894,24.9325991 23.2687805,24.9325991 L6.67325203,24.9325991 C6.35894309,24.9325991 6.10414634,24.6759353 6.10414634,24.3593233 L6.10414634,12.656306 L5.56910569,12.656306 C5.25479675,12.656306 5,12.3996422 5,12.0830302 C5,11.7664181 5.25479675,11.5097543 5.56910569,11.5097543 L9.78341463,11.5097543 L9.78341463,6.58220259 C9.78341463,6.26559052 10.0382114,6.00892672 10.3525203,6.00892672 L19.5895122,6.00892672 C19.9038211,6.00892672 20.1586179,6.26559052 20.1586179,6.58220259 L20.1586179,11.5098362 L24.3729268,11.5098362 Z M17.7754472,23.7861293 L17.7754472,22.8598793 L15.5401626,22.8598793 L15.5401626,23.7212672 C15.5401626,23.7432155 15.5386179,23.7648362 15.5362602,23.7861293 L17.7754472,23.7861293 Z M14.4057724,23.7861293 C14.4034146,23.7647543 14.4019512,23.7432155 14.4018699,23.7212672 L14.4018699,22.8598793 L12.1665854,22.8598793 L12.1665854,23.7861293 L14.4057724,23.7861293 Z M18.9136585,23.7861293 L22.6996748,23.7861293 L22.6996748,12.6563879 L7.24235772,12.6563879 L7.24235772,23.7861293 L11.028374,23.7861293 L11.028374,22.2866034 C11.028374,21.9699914 11.2831707,21.7133276 11.5974797,21.7133276 L18.3445528,21.7133276 C18.6588618,21.7133276 18.9136585,21.9699914 18.9136585,22.2866034 L18.9136585,23.7861293 Z M10.921626,7.15547845 L10.921626,11.5097543 L19.0204065,11.5097543 L19.0204065,7.15547845 L10.921626,7.15547845 Z M9.39243902,17.497375 C9.70682927,17.497375 9.96154472,17.7540388 9.96154472,18.0706509 L9.96154472,19.0657759 C9.96154472,19.3823879 9.70674797,19.6390517 9.39243902,19.6390517 C9.07813008,19.6390517 8.82333333,19.3823879 8.82333333,19.0657759 L8.82333333,18.0706509 C8.82333333,17.7540388 9.07813008,17.497375 9.39243902,17.497375 Z M11.6689431,17.497375 C11.9833333,17.497375 12.2380488,17.7540388 12.2380488,18.0706509 L12.2380488,19.0657759 C12.2380488,19.3823879 11.983252,19.6390517 11.6689431,19.6390517 C11.3546341,19.6390517 11.0998374,19.3823879 11.0998374,19.0657759 L11.0998374,18.0706509 C11.0998374,17.7540388 11.3546341,17.497375 11.6689431,17.497375 Z M13.9455285,17.497375 C14.2598374,17.497375 14.5146341,17.7540388 14.5146341,18.0706509 L14.5146341,19.0657759 C14.5146341,19.3823879 14.2598374,19.6390517 13.9455285,19.6390517 C13.6312195,19.6390517 13.3764228,19.3823879 13.3764228,19.0657759 L13.3764228,18.0706509 C13.3764228,17.7540388 13.6312195,17.497375 13.9455285,17.497375 Z M15.9965041,17.497375 C16.310813,17.497375 16.5656098,17.7540388 16.5656098,18.0706509 L16.5656098,19.0657759 C16.5656098,19.3823879 16.310813,19.6390517 15.9965041,19.6390517 C15.6821951,19.6390517 15.4273984,19.3823879 15.4273984,19.0657759 L15.4273984,18.0706509 C15.4273984,17.7540388 15.6821951,17.497375 15.9965041,17.497375 Z M18.2730894,17.497375 C18.5873984,17.497375 18.8421951,17.7540388 18.8421951,18.0706509 L18.8421951,19.0657759 C18.8421951,19.3823879 18.5873984,19.6390517 18.2730894,19.6390517 C17.9587805,19.6390517 17.7039837,19.3823879 17.7039837,19.0657759 L17.7039837,18.0706509 C17.7039837,17.7540388 17.9587805,17.497375 18.2730894,17.497375 Z M20.5495935,17.497375 C20.8639024,17.497375 21.1186992,17.7540388 21.1186992,18.0706509 L21.1186992,19.0657759 C21.1186992,19.3823879 20.8639024,19.6390517 20.5495935,19.6390517 C20.2352846,19.6390517 19.9804878,19.3823879 19.9804878,19.0657759 L19.9804878,18.0706509 C19.9804878,17.7540388 20.2352846,17.497375 20.5495935,17.497375 Z M9.39243902,14.2972672 C9.70682927,14.2972672 9.96154472,14.553931 9.96154472,14.8705431 L9.96154472,15.8656681 C9.96154472,16.1822802 9.70674797,16.438944 9.39243902,16.438944 C9.07813008,16.438944 8.82333333,16.1822802 8.82333333,15.8656681 L8.82333333,14.8705431 C8.82333333,14.553931 9.07813008,14.2972672 9.39243902,14.2972672 Z M11.6689431,14.2972672 C11.9833333,14.2972672 12.2380488,14.553931 12.2380488,14.8705431 L12.2380488,15.8656681 C12.2380488,16.1822802 11.983252,16.438944 11.6689431,16.438944 C11.3546341,16.438944 11.0998374,16.1822802 11.0998374,15.8656681 L11.0998374,14.8705431 C11.0998374,14.553931 11.3546341,14.2972672 11.6689431,14.2972672 Z M13.9455285,14.2972672 C14.2598374,14.2972672 14.5146341,14.553931 14.5146341,14.8705431 L14.5146341,15.8656681 C14.5146341,16.1822802 14.2598374,16.438944 13.9455285,16.438944 C13.6312195,16.438944 13.3764228,16.1822802 13.3764228,15.8656681 L13.3764228,14.8705431 C13.3764228,14.553931 13.6312195,14.2972672 13.9455285,14.2972672 Z M15.9965041,14.2972672 C16.310813,14.2972672 16.5656098,14.553931 16.5656098,14.8705431 L16.5656098,15.8656681 C16.5656098,16.1822802 16.310813,16.438944 15.9965041,16.438944 C15.6821951,16.438944 15.4273984,16.1822802 15.4273984,15.8656681 L15.4273984,14.8705431 C15.4273984,14.553931 15.6821951,14.2972672 15.9965041,14.2972672 Z M18.2730894,14.2972672 C18.5873984,14.2972672 18.8421951,14.553931 18.8421951,14.8705431 L18.8421951,15.8656681 C18.8421951,16.1822802 18.5873984,16.438944 18.2730894,16.438944 C17.9587805,16.438944 17.7039837,16.1822802 17.7039837,15.8656681 L17.7039837,14.8705431 C17.7039837,14.553931 17.9587805,14.2972672 18.2730894,14.2972672 Z M20.5495935,14.2972672 C20.8639024,14.2972672 21.1186992,14.553931 21.1186992,14.8705431 L21.1186992,15.8656681 C21.1186992,16.1822802 20.8639024,16.438944 20.5495935,16.438944 C20.2352846,16.438944 19.9804878,16.1822802 19.9804878,15.8656681 L19.9804878,14.8705431 C19.9804878,14.553931 20.2352846,14.2972672 20.5495935,14.2972672 Z M12.6944715,8.44166379 C13.0087805,8.44166379 13.2635772,8.69832759 13.2635772,9.01493966 L13.2635772,10.0100647 C13.2635772,10.3266767 13.0087805,10.5833405 12.6944715,10.5833405 C12.3801626,10.5833405 12.1253659,10.3266767 12.1253659,10.0100647 L12.1253659,9.01493966 C12.1253659,8.69832759 12.3801626,8.44166379 12.6944715,8.44166379 Z M14.9710569,8.44166379 C15.2853659,8.44166379 15.5401626,8.69832759 15.5401626,9.01493966 L15.5401626,10.0100647 C15.5401626,10.3266767 15.2853659,10.5833405 14.9710569,10.5833405 C14.656748,10.5833405 14.4019512,10.3266767 14.4019512,10.0100647 L14.4019512,9.01493966 C14.4019512,8.69832759 14.656748,8.44166379 14.9710569,8.44166379 Z M17.2476423,8.44166379 C17.5619512,8.44166379 17.816748,8.69832759 17.816748,9.01493966 L17.816748,10.0100647 C17.816748,10.3266767 17.5619512,10.5833405 17.2476423,10.5833405 C16.9333333,10.5833405 16.6785366,10.3266767 16.6785366,10.0100647 L16.6785366,9.01493966 C16.6785366,8.69832759 16.9333333,8.44166379 17.2476423,8.44166379 Z" id="path-1">
                </path>
              </svg>
            </div>
            <span v-if="show" class="side-link" id="active">Companies</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Vendors'}">
            <img class="image-box" src="@/assets/Icon/Vendors.svg">
            <span v-if="show" class="side-link">Vendors</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'DID'}">
            <img class="image-box" src="@/assets/Icon/DID.svg">
            <span v-if="show" class="side-link">DID</span>
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
            Companies
          </div>
        </div>
          <div class="main-header">
            <input class="company-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.searchCompany" placeholder="Search for company">
            <div class="company-header-title">
              Filter by:
            </div>
            <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Reseller" class="reseller" v-model="user.reseller">
              <option value="Reseller">Reseller</option>
            </select>
            <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Choose Reseller" class="reseller2" v-model="user.chooseReseller">
              <option value="Choose Reseller">Choose Reseller</option>
            </select>
            <router-link :to="{ name: 'AddCompany'}"><button id="company" type="submit">Add Company</button></router-link>
          </div>
          <div class="main-container">
            <table class="companies-table" cellspacing="0" cellpadding="0">
              <thead>
                <tr>
                  <th class="company-name-th">Company Name</th>
                  <th class="company-balance-th">Balance</th>
                  <th class="company-pay-th">Prepay/Postpay</th>
                  <th class="company-contact-th">Contact Person</th>
                  <th class="company-resellers-th">Resellers</th>
                  <th class="company-option-th"></th>
                  <th class="company-option-th"></th>
                  <th class="company-option-th"></th>
                  <th class="company-option-th"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="companies-title" colspan="9"><div class="company-title-my">My Companies</div></td>
                </tr>
                <tr>
                  <td class="company-name"><div class="company-avatar"></div> <div class="company-name-fix">Appolo Inc.</div></td>
                  <td class="company-balance">$805</td>
                  <td class="company-pay">$805/$781</td>
                  <td class="company-contact-text">Eula Hernandez</td>
                  <td class="company-resellers">Jean Riley</td>
                  <td class="company-option"><div class="product-control-info"><img v-on:click="showModal()" class="control-box" src="@/assets/Icon/Reseller.svg"></div></td>
                  <td class="company-option"><div class="product-control-info"><router-link :to="{ name: 'EditCompany' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="company-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="company-option">
                    <div v-on:click="test = !test" class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div>
                    <div v-if="test" class="company-menu">
                      <div class="company-menu-link">
                        <router-link :to="{ name: 'PaymentHistory'}">Payment History</router-link>
                        <div v-on:click="test = !test" class="company-menu-button">
                          <svg class="svg-blue" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path d="M10,16 C9.44771525,16 9,15.5522847 9,15 C9,14.4477153 9.44771525,14 10,14 C10.5522847,14 11,14.4477153 11,15 C11,15.5522847 10.5522847,16 10,16 Z M15,16 C14.4477153,16 14,15.5522847 14,15 C14,14.4477153 14.4477153,14 15,14 C15.5522847,14 16,14.4477153 16,15 C16,15.5522847 15.5522847,16 15,16 Z M20,16 C19.4477153,16 19,15.5522847 19,15 C19,14.4477153 19.4477153,14 20,14 C20.5522847,14 21,14.4477153 21,15 C21,15.5522847 20.5522847,16 20,16 Z" id="path-1">
                            </path>
                          </svg>
                        </div>
                      </div>
                      <div class="company-menu-link">
                        <router-link :to="{ name: 'InvoiceHistory'}">Invoice History</router-link>
                      </div>
                      <div class="company-menu-link">
                        <router-link :to="{ name: 'TransactionHistory'}">Transaction History</router-link>
                      </div>
                      <div class="company-menu-add">
                        <div class="company-span">
                          Add Manual Payment
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="company-name"><div class="company-avatar"></div> <div class="company-name-fix">Indonesia</div></td>
                  <td class="company-balance">$776</td>
                  <td class="company-pay">$776/$627</td>
                  <td class="company-contact-text">Ray Dennis</td>
                  <td class="company-resellers">Eva Armstrong</td>
                  <td class="company-option"><div class="product-control-info"><img v-on:click="showModal()" class="control-box" src="@/assets/Icon/Reseller.svg"></div></td>
                  <td class="company-option"><div class="product-control-info"><router-link :to="{ name: 'EditCompany' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="company-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="company-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div></td>
                </tr>
                <tr>
                  <td class="company-name"><div class="company-avatar"></div> <div class="company-name-fix">Dominica</div></td>
                  <td class="company-balance">$691</td>
                  <td class="company-pay">$691/$123</td>
                  <td class="company-contact-text">Helen Schmidt</td>
                  <td class="company-resellers">Joseph Little</td>
                  <td class="company-option"><div class="product-control-info"><img v-on:click="showModal()" class="control-box" src="@/assets/Icon/Reseller.svg"></div></td>
                  <td class="company-option"><div class="product-control-info"><router-link :to="{ name: 'EditCompany' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="company-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="company-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div></td>
                </tr>
                <tr>
                  <td class="companies-title" colspan="9"><div class="company-title-all">All Companies</div></td>
                </tr>
                <tr>
                  <td class="company-name"><div class="company-avatar"></div> <div class="company-name-fix">Appolo Inc.</div></td>
                  <td class="company-balance">$805</td>
                  <td class="company-pay">$805/$781</td>
                  <td class="company-contact-text">Herman Goodwin</td>
                  <td class="company-resellers">Anthony Christensen</td>
                  <td class="company-option"><div class="product-control-info"><img v-on:click="showModal()" class="control-box" src="@/assets/Icon/Reseller.svg"></div></td>
                  <td class="company-option"><div class="product-control-info"><router-link :to="{ name: 'EditCompany' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="company-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="company-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div></td>
                </tr>
                <tr>
                  <td class="company-name"><div class="company-avatar"></div> <div class="company-name-fix">Indonesia</div></td>
                  <td class="company-balance">$776</td>
                  <td class="company-pay">$776/$627</td>
                  <td class="company-contact-text">Katie Guzman</td>
                  <td class="company-resellers">Clifford Evans</td>
                  <td class="company-option"><div class="product-control-info"><img v-on:click="showModal()" class="control-box" src="@/assets/Icon/Reseller.svg"></div></td>
                  <td class="company-option"><div class="product-control-info"><router-link :to="{ name: 'EditCompany' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="company-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="company-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div></td>
                </tr>
                <tr>
                  <td class="company-name"><div class="company-avatar"></div> <div class="company-name-fix">Dominica</div></td>
                  <td class="company-balance">$691</td>
                  <td class="company-pay">$691/$123</td>
                  <td class="company-contact-text">Glenn Holmes</td>
                  <td class="company-resellers">Eliza Dunn</td>
                  <td class="company-option"><div class="product-control-info"><img v-on:click="showModal()" class="control-box" src="@/assets/Icon/Reseller.svg"></div></td>
                  <td class="company-option"><div class="product-control-info"><router-link :to="{ name: 'EditCompany' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="company-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="company-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="app">
          <modal v-show="isModalVisible" @close="closeModal"/>
        </div>
    </div>
</template>
<script>
import modal from '@/components/companyModal.vue'
import ProfileComponent from '@/components/ProfileComponent'

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
                days: 'Last 30 days',
                reseller: 'Reseller',
                chooseReseller: 'Choose Reseller',
            },

        }
    },
    components:{
      modal,
      ProfileComponent,
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
.company-title-my{
  color: #BDBFD8;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 30px;
  text-transform: uppercase;
  margin-left: 15px;
  margin-top: 7px;
}
.company-title-all{
  color: #BDBFD8;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 30px;
  text-transform: uppercase;
  margin-left: 15px;
  margin-top: 25px;
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
.company-menu{
	height: 210px;
	width: 228px;
	background-color: #FFFFFF;
	box-shadow: 0 10px 40px 0 rgba(0,0,0,0.1);
  display: inline-block;
  vertical-align: top;
  position: fixed;
  z-index: 1;
  float: right;
  margin-left: -220px;
  margin-top: -35px;
}
.company-menu-link{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  height: 40px;
  margin-left: 15px;
  margin-right: 15px;
}
.company-menu-link:first-child{
  margin-top: 35px;
}
.company-span{
  padding-top: 10px;
  padding-left: 15px;
}
.company-menu-add{
  color: #51A3F3;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  height: 40px;
  background-color: #F8F9FE;
}
.company-menu-button{
  float: right;
  display: inline-block;
  margin-top: -5px;
  margin-right: -7px;
}
.svg-active path{
  fill: white;
}
.companies-table{
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
.company-name-fix{
  display: inline-block;
  vertical-align: top;
  margin-top: 7px;
}
.company-avatar{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
}
.company-name-th{
  width: 184px;
  padding-left: 15px;
  height: 37px;
}
.company-balance-th{
  width: 90px;
  height: 37px;
}
.company-pay-th{
  width: 281px;
  height: 37px;
}
.company-contact-th{
  width: 150px;
  height: 37px;
}
.company-resellers-th{
  width: 180px;
  height: 37px;
}
.company-option-th{
  width: 48px;
  height: 37px;
}

.companies-title{
  background-color: #ffffff;
}

.company-name{
  width: 184px;
  padding-left: 15px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.company-balance{
  width: 90px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.company-pay{
  width: 281px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.company-contact{
  width: 150px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.company-contact-text{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.company-resellers{
  width: 180px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.company-option{
  width: 48px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.product-control-info{
  width: 30px;
  height: 30px;
  float: left;
  margin-top: -10px;
  margin-left: 15px;
}
.company-header-title{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  float: left;
  margin-left: 20px;
  display: inline-block;
  margin-top: 30px;
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
.company-input-search{
  max-width: 26.3636363636%;
  width: 100%;
  height: 40px !important;
  padding-left: 40px;
  margin-left: 20px;
  margin-top: 20px;
  float: left;
}
button#company{
  	height: 40px;
    max-width: 11.8181818182%;
    width: 100%;
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
    margin-right: 20px;
    float: right;
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
select{
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
}
.reseller{
    max-width: 13.6363636364%;
    width: 100%;
    height: 40px !important;
    border: 1px solid #EDEEF3;
    border-radius: 4px;
    background-color: #FFFFFF;
    padding: 10px 15px;
    font-size: 14px;
    line-height: 25px;
    font-family: "Helvetica Neue";
    color: #55616E;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    float: left;
    margin-top: 20px;
    margin-left: 10px;
}
.reseller2{
    max-width: 16.3636363636%;
    width: 100%;
    height: 40px !important;
    border: 1px solid #EDEEF3;
    border-radius: 4px;
    background-color: #FFFFFF;
    padding: 10px 15px;
    font-size: 14px;
    line-height: 25px;
    font-family: "Helvetica Neue";
    color: #55616E;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    float: left;
    margin-top: 20px;
    margin-left: 10px;
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
.navi-head{
  max-width: 560px;
  display: inline-block;
  width: auto;
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
    .company-input-search{
      max-width: calc(100% - 80px);
    }
    .reseller, .reseller2{
      max-width: 30%;
      width: 100%;
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
</style>
