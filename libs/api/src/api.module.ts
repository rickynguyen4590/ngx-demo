import {
  NgModule,
  ModuleWithProviders,
  SkipSelf,
  Optional,
} from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { AccountingService } from './api/accounting.service';
import { ActivitiesService } from './api/activities.service';
import { AgreementsService } from './api/agreements.service';
import { AttachmentsService } from './api/attachments.service';
import { AuthorizationService } from './api/authorization.service';
import { AuthorizationRulesService } from './api/authorizationRules.service';
import { ClaimEventsService } from './api/claimEvents.service';
import { ClaimTransactionsService } from './api/claimTransactions.service';
import { ClaimsService } from './api/claims.service';
import { ConstantsService } from './api/constants.service';
import { CoverageDeclarationService } from './api/coverageDeclaration.service';
import { CoveragesService } from './api/coverages.service';
import { DocumentArchiveService } from './api/documentArchive.service';
import { DocumentEngineService } from './api/documentEngine.service';
import { DocumentTemplatesService } from './api/documentTemplates.service';
import { ElectronicRemittanceService } from './api/electronicRemittance.service';
import { EmailService } from './api/email.service';
import { FleetMarineService } from './api/fleetMarine.service';
import { FormsService } from './api/forms.service';
import { GlobalSearchService } from './api/globalSearch.service';
import { MessagesService } from './api/messages.service';
import { NotesService } from './api/notes.service';
import { NotificationsService } from './api/notifications.service';
import { ObjectsService } from './api/objects.service';
import { OfferMarineAgreementsService } from './api/offerMarineAgreements.service';
import { OfferMarineObjectsService } from './api/offerMarineObjects.service';
import { OfferMarineSectionsService } from './api/offerMarineSections.service';
import { OfferMarineStatisticsService } from './api/offerMarineStatistics.service';
import { OfferMarineSubmissionsService } from './api/offerMarineSubmissions.service';
import { PersonsService } from './api/persons.service';
import { PolicyCoversService } from './api/policyCovers.service';
import { PremiumCalculationsService } from './api/premiumCalculations.service';
import { PremiumCalculationsPrivateService } from './api/premiumCalculationsPrivate.service';
import { PremiumsService } from './api/premiums.service';
import { ReadAccessLogService } from './api/readAccessLog.service';
import { ResponsiblesService } from './api/responsibles.service';
import { RoleTypesService } from './api/roleTypes.service';
import { SignaturesService } from './api/signatures.service';
import { SystemService } from './api/system.service';
import { SystemCodesAccountingCodesService } from './api/systemCodesAccountingCodes.service';
import { SystemCodesActivityCodesService } from './api/systemCodesActivityCodes.service';
import { SystemCodesAgreementCodesService } from './api/systemCodesAgreementCodes.service';
import { SystemCodesAuthorityReportsCodesService } from './api/systemCodesAuthorityReportsCodes.service';
import { SystemCodesBusinessBreakdownService } from './api/systemCodesBusinessBreakdown.service';
import { SystemCodesClaimCodesService } from './api/systemCodesClaimCodes.service';
import { SystemCodesCurrenciesService } from './api/systemCodesCurrencies.service';
import { SystemCodesDocumentArchiveService } from './api/systemCodesDocumentArchive.service';
import { SystemCodesGeographicCodesService } from './api/systemCodesGeographicCodes.service';
import { SystemCodesInsuranceCodesService } from './api/systemCodesInsuranceCodes.service';
import { SystemCodesLanguagesService } from './api/systemCodesLanguages.service';
import { SystemCodesObjectCodesService } from './api/systemCodesObjectCodes.service';
import { SystemCodesPersonCodesService } from './api/systemCodesPersonCodes.service';
import { SystemConfigDocumentNotificationGroupsService } from './api/systemConfigDocumentNotificationGroups.service';
import { SystemConfigTranslationService } from './api/systemConfigTranslation.service';
import { SystemConfigUserNotificationTypesService } from './api/systemConfigUserNotificationTypes.service';
import { SystemSettingsService } from './api/systemSettings.service';
import { TagsService } from './api/tags.service';
import { TimelineService } from './api/timeline.service';
import { UsedHoursService } from './api/usedHours.service';
import { UserNotificationsService } from './api/userNotifications.service';
import { UsersService } from './api/users.service';
import { ViewResolverService } from './api/viewResolver.service';
import { WorkPlacesService } from './api/workPlaces.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [],
})
export class ApiModule {
  public static forRoot(
    configurationFactory: () => Configuration
  ): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [{ provide: Configuration, useFactory: configurationFactory }],
    };
  }

  constructor(
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error(
        'ApiModule is already loaded. Import in your base AppModule only.'
      );
    }
    if (!http) {
      throw new Error(
        'You need to import the HttpClientModule in your AppModule! \n' +
          'See also https://github.com/angular/angular/issues/20575'
      );
    }
  }
}
