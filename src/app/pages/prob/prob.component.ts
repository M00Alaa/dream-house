import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-prob',
  templateUrl: './prob.component.html',
  styleUrls: ['./prob.component.scss']
})
export class ProbComponent {
  current = 0;
  radioValue = '';

  houseDescription = '';
  public editorData: string = `<p>عزيزي [اسم العميل]،</p><p>نحن في [اسم الشركة] نسعى دائمًا لتقديم أفضل الحلول التي تلبي احتياجاتك وتجعل حياتك أسهل. لذلك، يسعدنا أن نعلن عن إطلاق ميزات جديدة ومثيرة في منصتنا!</p><p>ما الجديد؟</p><ul><li>ميزة X: التي تتيح لك [وصف مختصر للميزة وفائدتها].</li><li>ميزة Y: لتمكينك من [وصف مختصر للميزة وفائدتها].</li><li>ميزة Z: التي تساعدك على [وصف مختصر للميزة وفائدتها].</li></ul><p>لماذا تختار [اسم الشركة]؟</p><ul><li>خدمة عملاء متميزة: نحن هنا لدعمك على مدار الساعة.</li><li>أسعار تنافسية: احصل على أفضل قيمة مقابل ما تدفعه.</li><li>أمان وثقة: نحن نحافظ على سرية معلوماتك وأمانها.</li></ul><p>عرض خاص! احصل على خصم بنسبة [نسبة الخصم]% عند استخدام الكود NEWFEATURES أثناء عملية الشراء. العرض ساري حتى [تاريخ انتهاء العرض].</p><p>لا تفوت الفرصة! انقر هنا للاكتشاف الآن: [رابط الموقع]</p><p>إذا كان لديك أي استفسارات أو تحتاج إلى مساعدة، لا تتردد في الاتصال بنا على [بيانات الاتصال].</p><p>شكرًا لاختيارك [اسم الشركة]. نحن نتطلع إلى خدمتك وتقديم أفضل تجربة ممكنة لك.</p><p>مع أطيب التحيات، فريق [اسم الشركة]</p>`;


  public editorConfig = {
    language: 'ar',
    toolbar: { items: ['bold', 'italic', 'link', '|', 'bulletedList', 'numberedList', 'blockQuote', '|', 'undo', 'redo'], shouldNotGroupWhenFull: true }
  };

  constructor(private changeDetector: ChangeDetectorRef, private router: Router) { }

  public isLayoutReady = false;
  public Editor = ClassicEditor;
  public ngAfterViewInit(): void {
    this.isLayoutReady = true;
    this.changeDetector.detectChanges();
  }

  getData() {
    console.log(this.editorData);
  }

  next() {
    this.current = this.current + 1;
  }

  pre() {
    this.current = this.current - 1;
  }

  submit() {
    console.log('house description', this.houseDescription, 'editor', this.editorData);

    this.router.navigate(['/submission']);
  }

}
