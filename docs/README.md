# Руководство по PyGTK 3

Данное руковдство является неофициальным переводом [The Python GTK+ 3 Tutorial](https://python-gtk-3-tutorial.readthedocs.io/en/latest/index.html). Автор оригинала: [Sebastian Pölsterl](https://github.com/sebp). Автор перевода на русский язык: [Михаил Краснов](https://github.com/Linuxoid85).

<dl class="field-list simple">
<dt class="field-odd">Релиз</dt>
<dd class="field-odd"><p>3.4</p>
</dd>
<dt class="field-even">Дата перевода оригинала</dt>
<dd class="field-even"><p>05 авг. 2021</p>
</dd>
<dt class="field-even">Дата (перевод)</dt>
<dd class="field-even">30.08.2021</dd>
<dt class="field-odd">Copyright</dt>
<dd class="field-odd"><p>GNU Free Documentation License 1.3 with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts</p>
</dd>
</dl>

## Введение

Это руководство содержит инструкции для написания GTK+ 3 приложений на Python.

Перед тем, как перейти к прочтению этого **неофициального перевода**, рекомендуется иметь хотя бы небольшой опыт работы с языком программирования Python. Программирование с использованием GTK (как и с любым другим графическим тулкитом) вызовет новые проблемы по сравнению с написанием консольных программ. Как минимум вам необходимо знать, как создавать и запускать файлы Python, понимать основные ошибки интерпретатора и работать со строками, целыми числами, числами с плавающей запятой и логическими значениями. Для более сложных виджетов потребуется хорошее знание списков и кортежей.

В этом руководстве описаны наиболее важные классы и методы GTK3, однако оно не подойдёт в качестве справочника по API (для этого подойдёт [Справочное руководство GTK+](https://developer.gnome.org/gtk3/stable/)). Для Python так же читайте [это](https://lazka.github.io/pgi-docs/).
