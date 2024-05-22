// import axios from 'axios'
// import Vue from 'vue'
// import Vuex from 'vuex'
// import VuexORM from '@vuex-orm/core'
// import VuexORMAxios from '@vuex-orm/plugin-axios'
// import VueCookies from 'vue-cookies'

import { createStore } from 'vuex'
// import { createORM } from '@vuex-orm/core'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import axios from 'axios'

// Register Models to Database.


import { DBCrudCacheSet } from 'quicklists-vue-orm-ui';


import Address from '@/models/Address'
import Attachment from '@/models/Attachment'
import Audit from '@/models/Audit'
import Bank from '@/models/Bank'
import Communication from '@/models/Communication'
import Contactnumber from '@/models/Contactnumber'
import Crm from '@/models/Crm'
import Document from '@/models/Document'
import Documentdetail from '@/models/Documentdetail'
import Domainuser from '@/models/Domainuser'
import Dummy from '@/models/Dummy'
import Email from '@/models/Email'
import Entity from '@/models/Entity'
import Entityaudit from '@/models/Entityaudit'
import Entityevent from '@/models/Entityevent'
import Entitygood from '@/models/Entitygood'
import Entitygoodapproval from '@/models/Entitygoodapproval'
import Entityrelationship from '@/models/Entityrelationship'
import Externalproducer from '@/models/Externalproducer'
import Good from '@/models/Good'
import Instanceno from '@/models/Instanceno'
import Object from '@/models/Object'
import Objecttrait from '@/models/Objecttrait'
import Objectvalue from '@/models/Objectvalue'
import Passwordhash from '@/models/Passwordhash'
import Productprovider from '@/models/Productprovider'
import Query from '@/models/Query'
import Queryheader from '@/models/Queryheader'
import Relative from '@/models/Relative'
import Requirement from '@/models/Requirement'
import Requirementdetail from '@/models/Requirementdetail'
import Rule from '@/models/Rule'
import Ruleaction from '@/models/Ruleaction'
import Ruleactiondatum from '@/models/Ruleactiondatum'
import Ruleconfig from '@/models/Ruleconfig'
import Ruleentityrole from '@/models/Ruleentityrole'
import Servicerequest from '@/models/Servicerequest'
import Servicerequestfrequency from '@/models/Servicerequestfrequency'
import Servicerequestreport from '@/models/Servicerequestreport'
import Systemaction from '@/models/Systemaction'
import Systemcode from '@/models/Systemcode'
import Systemconfiguration from '@/models/Systemconfiguration'
import Systemlog from '@/models/Systemlog'
import Systemuser from '@/models/Systemuser'
import Transaction from '@/models/Transaction'
import Treatmentdetail from '@/models/Treatmentdetail'
import Useraccess from '@/models/Useraccess'
import Userconfiguration from '@/models/Userconfiguration'
import Userdevice from '@/models/Userdevice'
import Userrole from '@/models/Userrole'
import Userroleaccess from '@/models/Userroleaccess'
import WebsiteProducerRegistration from '@/models/WebsiteProducerRegistration'




VuexORM.use(VuexORMAxios, {
  axios,
  baseURL: 'https://your-api-url.com'  // Set your API base URL here
});

const database = new VuexORM.Database();

database.register(DBCrudCacheSet)
database.register(Address)
database.register(Attachment)
database.register(Audit)
database.register(Bank)
database.register(Communication)
database.register(Contactnumber)
database.register(Crm)
database.register(Document)
database.register(Documentdetail)
database.register(Domainuser)
database.register(Dummy)
database.register(Email)
database.register(Entity)
database.register(Entityaudit)
database.register(Entityevent)
database.register(Entitygood)
database.register(Entitygoodapproval)
database.register(Entityrelationship)
database.register(Externalproducer)
database.register(Good)
database.register(Instanceno)
database.register(Object)
database.register(Objecttrait)
database.register(Objectvalue)
database.register(Passwordhash)
database.register(Productprovider)
database.register(Query)
database.register(Queryheader)
database.register(Relative)
database.register(Requirement)
database.register(Requirementdetail)
database.register(Rule)
database.register(Ruleaction)
database.register(Ruleactiondatum)
database.register(Ruleconfig)
database.register(Ruleentityrole)
database.register(Servicerequest)
database.register(Servicerequestfrequency)
database.register(Servicerequestreport)
database.register(Systemaction)
database.register(Systemcode)
database.register(Systemconfiguration)
database.register(Systemlog)
database.register(Systemuser)
database.register(Transaction)
database.register(Treatmentdetail)
database.register(Useraccess)
database.register(Userconfiguration)
database.register(Userdevice)
database.register(Userrole)
database.register(Userroleaccess)
database.register(WebsiteProducerRegistration)


const store = createStore({
  plugins: [VuexORM.install(database)]
});

export default store;
