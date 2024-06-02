import { createStore } from 'vuex';
import VuexORM from '@vuex-orm/core';
import VuexORMAxios from '@vuex-orm/plugin-axios';
import axios from 'axios';

import { DBCrudCacheSet } from 'quicklists-vue-orm-ui';

import Address from '@/models/Address';
import Attachment from '@/models/Attachment';
import Audit from '@/models/Audit';
import Bank from '@/models/Bank';
import Communication from '@/models/Communication';
import ContactNumber from '@/models/ContactNumber';
import Crm from '@/models/Crm';
import Document from '@/models/Document';
import DocumentDetail from '@/models/DocumentDetail';
import DomainUser from '@/models/DomainUser';
import Dummy from '@/models/Dummy';
import Email from '@/models/Email';
import Entity from '@/models/Entity';
import EntityAudit from '@/models/EntityAudit';
import EntityEvent from '@/models/EntityEvent';
import EntityGood from '@/models/EntityGood';
import EntityGoodApproval from '@/models/EntityGoodApproval';
import EntityRelationship from '@/models/EntityRelationship';
import ExternalProducer from '@/models/ExternalProducer';
import Good from '@/models/Good';
import InstanceNo from '@/models/InstanceNo';
import Migration from '@/models/Migration';
import Object from '@/models/Object';
import ObjectTrait from '@/models/ObjectTrait';
import ObjectValue from '@/models/ObjectValue';
import PasswordHash from '@/models/PasswordHash';
import ProductProvider from '@/models/ProductProvider';
import Query from '@/models/Query';
import QueryHeader from '@/models/QueryHeader';
import Relative from '@/models/Relative';
import Requirement from '@/models/Requirement';
import RequirementDetail from '@/models/RequirementDetail';
import Rule from '@/models/Rule';
import RuleAction from '@/models/RuleAction';
import RuleActionDatum from '@/models/RuleActionDatum';
import RuleConfig from '@/models/RuleConfig';
import RuleEntityRole from '@/models/RuleEntityRole';
import ServiceRequest from '@/models/ServiceRequest';
import ServiceRequestFrequency from '@/models/ServiceRequestFrequency';
import ServiceRequestReport from '@/models/ServiceRequestReport';
import SystemAction from '@/models/SystemAction';
import SystemCode from '@/models/SystemCode';
import SystemConfiguration from '@/models/SystemConfiguration';
import SystemLog from '@/models/SystemLog';
import SystemUser from '@/models/SystemUser';
import Transaction from '@/models/Transaction';
import TreatmentDetail from '@/models/TreatmentDetail';
import UserAccess from '@/models/UserAccess';
import UserConfiguration from '@/models/UserConfiguration';
import UserDevice from '@/models/UserDevice';
import UserRole from '@/models/UserRole';
import UserRoleAccess from '@/models/UserRoleAccess';
import WebsiteProducerRegistration from '@/models/WebsiteProducerRegistration';

VuexORM.use(VuexORMAxios, {
  axios,
  baseURL: 'https://your-api-url.com'  // Set your API base URL here
});

const database = new VuexORM.Database();

database.register(DBCrudCacheSet);
database.register(Address);
database.register(Attachment);
database.register(Audit);
database.register(Bank);
database.register(Communication);
database.register(ContactNumber);
database.register(Crm);
database.register(Document);
database.register(DocumentDetail);
database.register(DomainUser);
database.register(Dummy);
database.register(Email);
database.register(Entity);
database.register(EntityAudit);
database.register(EntityEvent);
database.register(EntityGood);
database.register(EntityGoodApproval);
database.register(EntityRelationship);
database.register(ExternalProducer);
database.register(Good);
database.register(InstanceNo);
database.register(Migration);
database.register(Object);
database.register(ObjectTrait);
database.register(ObjectValue);
database.register(PasswordHash);
database.register(ProductProvider);
database.register(Query);
database.register(QueryHeader);
database.register(Relative);
database.register(Requirement);
database.register(RequirementDetail);
database.register(Rule);
database.register(RuleAction);
database.register(RuleActionDatum);
database.register(RuleConfig);
database.register(RuleEntityRole);
database.register(ServiceRequest);
database.register(ServiceRequestFrequency);
database.register(ServiceRequestReport);
database.register(SystemAction);
database.register(SystemCode);
database.register(SystemConfiguration);
database.register(SystemLog);
database.register(SystemUser);
database.register(Transaction);
database.register(TreatmentDetail);
database.register(UserAccess);
database.register(UserConfiguration);
database.register(UserDevice);
database.register(UserRole);
database.register(UserRoleAccess);
database.register(WebsiteProducerRegistration);

const store = createStore({
  plugins: [VuexORM.install(database)]
});

export default store;
