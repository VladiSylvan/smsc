<template>
    <div class="container">
      <company-navigation-component title="Templates"></company-navigation-component>
      <div class="main-navi">
        <div class="res-div">
          <div class="head-title">
            Templates
          </div>
        </div>
        <input class="template-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.searchTemplate" placeholder="Search for template">
      </div>
      <div class="main">
        <div class="template-main">
          <div v-if="successMsg != ''">
            <h5 style="color: green; text-align: center;">
              {{ successMsg }}
            </h5>
          </div>
          <div v-if="error">
              <h5 style="color: red; text-align: center;">{{ errorMsg }}</h5>
          </div>
          <table class="template-table" cellspacing="0" cellpadding="0">
            <thead>
              <tr class="template-tr">
                <th class="template-active-table-th"></th>
                <th class="template-name-th">Template Name</th>
                <th class="template-created-th">Created On</th>
                <th class="template-created-by-th">Created By</th>
                <th class="template-sms-th">SMS Text</th>
                <th class="template-options-th"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="template-tr">
                <td class="template-title" colspan="7"><div class="template-title-new">New Templates</div></td>
              </tr>
              <tr v-for="newTemplate, index in newTemplates" class="template-tr">
                <td class="template-active-table"><div class="template-active"></div></td>
                <td class="template-name">{{ newTemplate.template_name }}</td>
                <td class="template-created">{{ newTemplate.created_on | moment("MM-DD-YYYY") }}</td>
                <td class="template-created-by"><div class="template-avatar"></div> <div class="template-name-fix">{{ newTemplate.created_by }}</div></td>
                <td class="template-sms-text">{{ newTemplate.sms_text }}</td>
                <td class="template-options">
                  <div v-on:click="approve(newTemplate.sms_template_uuid, index)" class="template-box">
                    <svg class="template-like" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <path d="M22.5198124,17.5572982 C22.8571248,17.1129235 23.0188971,16.6365537 22.9982453,16.145964 C22.9775935,15.6056043 22.74354,15.1825596 22.5507901,14.9230448 C22.7745177,14.3471351 22.8605668,13.4406106 22.1136607,12.736721 C21.5663886,12.2212463 20.6370585,11.9901715 19.3497642,12.0541614 C18.4445279,12.0968214 17.687296,12.2710163 17.6563183,12.2781263 L17.6528763,12.2781263 C17.4807782,12.3101213 17.2983541,12.3492263 17.1124881,12.3918862 C17.0987202,12.1643664 17.1365818,11.5991217 17.5427335,10.3264325 C18.0246084,8.81200335 17.9970727,7.65307403 17.4532425,6.87808448 C16.8818766,6.06398996 15.9697563,6 15.7012832,6 C15.4431359,6 15.2056404,6.11020494 15.0369842,6.31283982 C14.6549263,6.77143455 14.6996718,7.61752405 14.7478593,8.00857382 C14.2935202,9.26704308 13.0199938,12.3527813 11.9426593,13.2095358 C11.9220075,13.2237558 11.9047977,13.2415307 11.8875878,13.2593057 C11.5709272,13.6041405 11.3575255,13.9774153 11.212963,14.3044751 C11.0098872,14.1907152 10.7792757,14.1267252 10.5314543,14.1267252 L8.43185672,14.1267252 C7.64020517,14.1267252 7,14.7915098 7,15.6056043 L7,21.382476 C7,22.2001255 7.64364713,22.8613551 8.43185672,22.8613551 L10.5314543,22.8613551 C10.8377891,22.8613551 11.123472,22.7618151 11.3575255,22.5911752 L12.1663869,22.6907152 C12.2902976,22.7084902 14.493154,22.996445 16.7545239,22.95023 C17.1641175,22.982225 17.5496174,23 17.9075816,23 C18.523693,23 19.0606393,22.95023 19.5080945,22.8506901 C20.5613353,22.6196152 21.2807056,22.1574655 21.6455537,21.4784609 C21.9243528,20.9594312 21.9243528,20.4439565 21.8796072,20.1168967 C22.5645579,19.4769971 22.6850266,18.7695525 22.6609329,18.2718528 C22.647165,17.983898 22.5852097,17.7386031 22.5198124,17.5572982 Z M8.43185672,21.9015056 C8.1530577,21.9015056 7.92933008,21.6668758 7.92933008,21.382476 L7.92933008,15.6020494 C7.92933008,15.3140945 8.15649966,15.0830197 8.43185672,15.0830197 L10.5314543,15.0830197 C10.8102533,15.0830197 11.033981,15.3176495 11.033981,15.6020494 L11.033981,21.378921 C11.033981,21.6668758 10.8068114,21.8979506 10.5314543,21.8979506 L8.43185672,21.8979506 L8.43185672,21.9015056 Z M21.6386698,17.1413634 C21.4941073,17.2977834 21.4665716,17.5359682 21.5767145,17.7208281 C21.5767145,17.7243831 21.717835,17.973233 21.7350448,18.3145128 C21.7591385,18.7802175 21.5422948,19.1925972 21.0879557,19.544542 C20.9261834,19.672522 20.8607861,19.8929318 20.9296254,20.0920117 C20.9296254,20.0955667 21.0776298,20.5648264 20.8366924,21.0092012 C20.6060808,21.4358009 20.0932283,21.7415307 19.3153446,21.9121706 C18.6923492,22.0508156 17.8456263,22.0757005 16.8061534,21.9903806 C16.7923855,21.9903806 16.7751757,21.9903806 16.7579659,21.9903806 C14.5447835,22.0401506 12.3075074,21.7415307 12.2834136,21.7379757 L12.2799717,21.7379757 L11.9323334,21.6953158 C11.9529852,21.5957758 11.963311,21.4891259 11.963311,21.382476 L11.963311,15.6020494 C11.963311,15.4491844 11.9392173,15.2998745 11.8979137,15.1612296 C11.9598691,14.9230448 12.1319672,14.3933501 12.5381189,13.9418653 C14.0835604,12.6762861 15.5945823,8.40673358 15.6599796,8.22187369 C15.6875153,8.14721874 15.6943992,8.06545379 15.6806314,7.98368883 C15.622118,7.58552907 15.6427698,7.09849435 15.7253769,6.95273944 C15.907801,6.95629444 16.4000017,7.00961941 16.6960105,7.43266416 C17.0470908,7.93391886 17.0333229,8.82977834 16.654707,10.0171476 C16.0764572,11.8266416 16.0282697,12.779381 16.4860508,13.1988708 C16.7132204,13.4086156 17.0161131,13.4192806 17.2363988,13.3375157 C17.4463585,13.2877457 17.6459924,13.2450857 17.8353004,13.2130908 C17.8490682,13.2095358 17.8662781,13.2059808 17.8800459,13.2024258 C18.9367286,12.9642409 20.8298084,12.818486 21.4872234,13.4370556 C22.0448215,13.9631953 21.6489957,14.6599749 21.6042502,14.7346299 C21.4768975,14.9337097 21.5147591,15.1932246 21.6868573,15.3531995 C21.6902993,15.3567545 22.0517054,15.7086993 22.0689152,16.181514 C22.0826831,16.4979088 21.9381206,16.8214136 21.6386698,17.1413634 Z" id="path-1">
                      </path>
                    </svg>
                  </div>
                  <div class="template-box">
                    <svg class="template-dislike" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <path d="M23.4719421,12.4326889 C23.5412554,12.2516868 23.6069206,12.0068017 23.6251609,11.7228768 C23.6506974,11.2224593 23.523015,10.5197453 22.7970494,9.88091441 C22.8444742,9.55440084 22.8444742,9.036238 22.5489807,8.52162422 C22.1586373,7.84020459 21.396191,7.37882672 20.279882,7.14813779 C19.5320279,6.99197912 18.5506974,6.96003758 17.361427,7.04876409 C14.9646459,7.0026263 12.629882,7.29010021 12.4985515,7.30784551 L11.6412554,7.40721921 C11.3931867,7.2368643 11.090397,7.13749061 10.7657189,7.13749061 L8.540397,7.13749061 C7.7013412,7.13749061 7.02280043,7.80116493 7.02280043,8.61389979 L7.02280043,14.3811232 C7.02280043,15.1974071 7.70498927,15.8575324 8.540397,15.8575324 L10.7657189,15.8575324 C11.0283798,15.8575324 11.2728004,15.7936493 11.4880365,15.6800793 C11.6412554,16.0065929 11.8674356,16.3792443 12.2030579,16.7235031 C12.2212983,16.7412484 12.2395386,16.7589937 12.261427,16.77319 C13.4069206,17.6285136 14.756706,20.7090981 15.234603,21.9654656 C15.1871781,22.3558622 15.1397532,23.2005386 15.5410408,23.6583674 C15.7197961,23.8606639 15.9678648,23.9706848 16.245118,23.9706848 C16.5260193,23.9706848 17.4964056,23.9068017 18.101985,23.0940668 C18.6747318,22.3203716 18.7075644,21.1633779 18.1968348,19.6514781 C17.7663627,18.3809144 17.7262339,17.8166138 17.7408262,17.5894739 C17.9378219,17.6320626 18.1311695,17.6711023 18.317221,17.7030438 L18.3208691,17.7030438 C18.3537017,17.710142 19.1562768,17.8840459 20.1157189,17.9266347 C21.4800966,17.9905177 22.4687232,17.7598288 23.045118,17.245215 C23.840397,16.538952 23.7455472,15.6374906 23.5084227,15.0625428 C23.7127146,14.8034614 23.9607833,14.3811232 23.9826717,13.841666 C23.9972639,13.3518956 23.8294528,12.8798706 23.4719421,12.4326889 Z M10.7657189,14.9028351 L8.540397,14.9028351 C8.24490343,14.9028351 8.00777897,14.6685971 8.00777897,14.3846722 L8.00777897,8.61744885 C8.00777897,8.32997495 8.2485515,8.09928601 8.540397,8.09928601 L10.7657189,8.09928601 C11.0612124,8.09928601 11.2983369,8.33352401 11.2983369,8.61744885 L11.2983369,14.3846722 C11.2983369,14.6721461 11.0612124,14.9028351 10.7657189,14.9028351 Z M22.5015558,15.2470939 C22.5015558,15.250643 22.6292382,15.4458413 22.673015,15.7120209 C22.7277361,16.0420835 22.6328863,16.3153612 22.3775215,16.542501 C21.6807403,17.1600376 19.6743026,17.0180752 18.5543455,16.776739 C18.5397532,16.77319 18.5251609,16.7696409 18.5069206,16.7660919 C18.3062768,16.7306013 18.0910408,16.6880125 17.8721567,16.6418747 C17.6386803,16.5602463 17.3176502,16.5708935 17.0768777,16.7802881 C16.5916845,17.1990772 16.6464056,18.1502255 17.255633,19.9566973 C17.6569206,21.1420835 17.6715129,22.0364468 17.2994099,22.5368643 C16.985676,22.9592025 16.4676502,23.0124384 16.2706545,23.0159875 C16.1831009,22.8740251 16.1575644,22.3878038 16.2232296,21.9867599 C16.2341738,21.9086806 16.2268777,21.8270522 16.2013412,21.7489729 C16.1320279,21.5679708 14.5305258,17.302 12.8925429,16.0385344 C12.4657189,15.5878038 12.2796674,15.0589937 12.2140021,14.8212067 C12.257779,14.6827933 12.2833155,14.5337328 12.2833155,14.3811232 L12.2833155,8.61744885 C12.2833155,8.51097704 12.2723712,8.40450522 12.2504828,8.30513152 L12.6189378,8.2625428 L12.6225858,8.2625428 C12.6444742,8.25899374 15.019367,7.96087265 17.3650751,8.0105595 C17.3796674,8.0105595 17.3979077,8.0105595 17.4161481,8.0105595 C18.5215129,7.92538205 19.4152897,7.95022547 20.0755901,8.08863883 C20.8927575,8.25899374 21.4326717,8.55711482 21.6807403,8.97945303 C21.9397532,9.41598747 21.7974785,9.86671816 21.7865343,9.90930689 C21.7099249,10.1080543 21.7792382,10.324547 21.9543455,10.4523132 C23.0341738,11.2402046 22.5380365,12.1594113 22.4723712,12.2729812 C22.351985,12.4575324 22.3811695,12.6917704 22.5380365,12.8514781 C22.8517704,13.1708935 23.0049893,13.490309 22.9940451,13.8026263 C22.9794528,14.2675532 22.6109979,14.6153612 22.5854614,14.6366555 C22.4030579,14.7892651 22.3702253,15.0483466 22.5015558,15.2470939 Z" id="path-1">
                      </path>
                    </svg>
                  </div>
                </td>
              </tr>
              <tr class="template-tr">
                <td class="template-title" colspan="6"><div class="template-title-all">All Templates</div></td>
              </tr>
              <tr v-for="allTemplate in allTemplates" class="template-tr">
                <td class="template-active-table"><div class="template-active"></div></td>
                <td class="template-name">{{ allTemplate.template_name }}</td>
                <td class="template-created">{{ allTemplate.created_on | moment("MM-DD-YYYY") }}</td>
                <td class="template-created-by"><div class="template-avatar"></div> <div class="template-name-fix">{{ allTemplate.created_by }}</div></td>
                <td class="template-sms-text">{{ allTemplate.sms_text }}</td>
                <td class="template-options"><div class="template-approved">Approved</div></td>
              </tr>
            </tbody>
          </table>
          <div class="pagination">
            <button type="button" id="previousPage" @click="previousPage()" disabled>Previous</button>
            <button type="button" id="nextPage" @click="nextPage()" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import modal from '@/components/modal.vue'
import CompanyNavigationComponent from '@/components/CompanyNavigationComponent'

export default {
    name: 'app',
    data () {
        return {
          show: true,
          width: '60px',
          transitionName: 'fade',
          popup: false,
          isModalVisible: false,
          newTemplates: [],
          allTemplates: [],
          successMsg: '',
                user:{
                system: 'Overall system',
                days: 'Last 30 days'
            },
            error: false,
            errorMsg: '',

        }
    },
    components:{
      modal,
      CompanyNavigationComponent,
    },
    methods:{
      approve(value, index){
        var app = this
        event.preventDefault();
        this.axios.patch('sms_template/' + value + '/approve').then( res => {
            this.users.splice(index, 1)
            this.$route.params.successMsg = null
            this.successMsg = 'OK'
        }).catch( err => {
            var app = this
            app.errorMsg = err.response.data.errors[0]
            app.error = true
        })
      },
      getData(page = 0){
        this.axios.all([
          this.axios.get('sms_template/list?admin_approved=false&company_admin_approved=false'),
          this.axios.get('sms_template/list?company_admin_approved=true&page=' + page),
        ]).then( this.axios.spread((newTemplates, allTemplates) => {
          this.newTemplates = newTemplates.data.payload.items
          this.allTemplates = allTemplates.data.payload.items

          this.totalPages = Math.floor(allTemplates.data.payload.total / allTemplates.data.payload.per_page)
          if(this.totalPages == 0){
            document.getElementById('nextPage').setAttribute('disabled', 'disabled')
          }
        })).catch(error => {
          console.log(error)
        })
      },
      nextPage(){
        this.pageNumber++;
        document.getElementById('previousPage').removeAttribute('disabled')
        if(this.pageNumber == this.totalPages){
          document.getElementById('nextPage').setAttribute('disabled', 'disabled')
        }
        this.getData(this.pageNumber)
      },
      previousPage(){
        this.pageNumber--
        if(this.pageNumber == 0){
          document.getElementById('previousPage').setAttribute('disabled', 'disabled')
        }
        if(this.pageNumber < this.totalPages){
          document.getElementById('nextPage').removeAttribute('disabled')
        }
        this.getData(this.pageNumber)
      }
    },
    mounted(){
      this.getData()
    },
}
</script>
