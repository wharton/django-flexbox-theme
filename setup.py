import os
from setuptools import setup

os.chdir(os.path.normpath(os.path.join(os.path.abspath(__file__), os.pardir)))

setup(
    name='theme',
    version='0.1',
    packages=['theme'],
    package_data={'theme': [
        'templates/*.html',
        'templates/example/*.html',
        'static/theme/styles/*.*',
        'static/theme/styles/abstracts/*.*',
        'static/theme/styles/base/*.*',
        'static/theme/styles/components/*.*',
        'static/theme/styles/layout/*.*',
        'static/theme/styles/pages/*.*',
        'static/theme/styles/postcss/*.*',
        'static/theme/styles/themes/*.*',
        'static/theme/styles/vendor/*.*',
        'static/theme/styles/vendor/fonts/*.*',
        'static/theme/css/*.*',
        'static/theme/img/*.*',
        'static/theme/js/*.*',
        'static/theme/js/min/*.*',
    ]},
    include_package_data=True,
    license='BSD License',
    description="A modern CSS starter kit based on Flexbox",
    url='https://github.com/wharton/django-flexbox-theme',
    author='Chad Whitman - App Developer, The Wharton School',
    classifiers=[
        'Environment :: Web Environment',
        'Framework :: Django',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: BSD License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.2',
        'Programming Language :: Python :: 3.3',
        'Topic :: Internet :: WWW/HTTP',
        'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
    ],
)
