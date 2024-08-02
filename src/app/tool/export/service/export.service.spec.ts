import { TestBed } from '@angular/core/testing';

import { ExportService } from 'src/app/tool/export/service/export.service';
import { HtmlPresentationService } from './html-presentation.service';
import { MockService } from 'ng-mocks';
import { IconSetConfigurationService } from '../../icon-set-config/service/icon-set-configuration.service';
import { PngService } from './png.service';
import { SvgService } from './svg.service';
import { RendererService } from '../../modeler/service/renderer.service';

describe('ExportService', () => {
  let service: ExportService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HtmlPresentationService,
          useValue: MockService(HtmlPresentationService),
        },
        {
          provide: IconSetConfigurationService,
          useValue: MockService(IconSetConfigurationService),
        },
        {
          provide: PngService,
          useValue: MockService(PngService),
        },
        {
          provide: SvgService,
          useValue: MockService(SvgService),
        },
        {
          provide: RendererService,
          useValue: MockService(RendererService),
        },
      ],
    });
    service = TestBed.inject(ExportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
