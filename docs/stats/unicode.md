# Работа со строками

В этом разделе объясняется, как строки представлены в Python 2.x, Python 3.x и GTK+, и обсуждаются распространённые ошибки, возникающие при работе со строками.

## Определения

Концептуально строка представляет собой список символов, таких как "А", "B", "C" или "E". **Символы** являются абстрактными представлениями, и их значение зависит от языка и контекста, в которых они используются. Стандарт Unicode описывает, как символы представляются **code points**. Например, указанные выше символы представлены **code points** `U+0041`, `U+0042`, `U+0043` и `U+00C9` соответственно. В основном code points - это числа в диапазоне от 0 до 0x10FFFF.

Как упоминалось ранее, представление строки в виде списка code points является абстрактным. Чтобы преобразить это абстрактное представление в последовательность байтов, строка Unicode должна быть закодирована. Самая простая форма кодировки - это ASCII и выполняется следующим образом:

1. Если code point < 128, каждый байт совпадает со значением code point;
2. Если code point больше или равна 128, строка Unicode не может быть представлена в этой кодировке, в таком случае Python вызывает исключение `UnicodeEncodeError`).

Хотя ASCII проста в применении, но едва ли хватит 128 различных символов, которых она может закодировать. Есть другая кодировка, призванная решить эту проблему, - UTF-8. UTF означает "Unicode Transformation Format" ("Формат преобразования Unicode"), а "8" - что при кодировании используются 8-битные числа.

## Поддержка Unicode в Python 3

Начиная с Python 3.0, все строки хранятся как `Unicode` в экземпляр типа `str`. С другой стороны, закодированные строки представлены как двоичные данные в форме экземпляров байтового типа. Концептуально `str` относится к тексту, а байты - к данным. Используйте `str.encode()` для перехода от str к байтам и `bytes.decode()` для перехода от байтов к str.

Кроме того, больше невозможно смешивать строки Unicode с закодированными строками, потому что это приведёт к ошибке `TypeError`:

```python
>>> text = "Fu\u00dfb\u00e4lle"
>>> data = b" sind rund"
>>> text + data
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: Can't convert 'bytes' object to str implicitly
>>> text + data.decode("utf-8")
'Fußbälle sind rund'
>>> text.encode("utf-8") + data
b'Fu\xc3\x9fb\xc3\xa4lle sind rund'
```

## Поддержка Unicode в GTK+

PyGObject будет автоматически кодировать/декодировать в/из UTF-8, если вы передаёте строку в метод или метод возвращает строку. Строки или текст всегда будут представлены только как экземпляры `str`:

```python
>>> from gi.repository import Gtk
>>> label = Gtk.Label()
>>> text = "Fu\u00dfb\u00e4lle"
>>> label.set_text(text)
>>> txt = label.get_text()
>>> type(txt), txt
(<class 'str'>, 'Fußbälle')
>>> txt == text
True
```

## Литература

- [What's new in Python 3.0](https://docs.python.org/3/whatsnew/3.0.html#text-vs-data-instead-of-unicode-vs-8-bit) описывает новые концепции, чётко различающие текст и данные;
- [The Unicode HOWTO for Python 3.x](https://docs.python.org/dev/howto/unicode.html) обсуждает поддержку Unicode в Python 3.x;
- [UTF-8 encoding table and Unicode characters](https://www.utf8-chartable.de/) содержит список code points Unicode и их соответствующую кодировку UTF-8.
